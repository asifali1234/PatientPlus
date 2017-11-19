package com.genesis.patient;

import android.app.ProgressDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.DefaultItemAnimator;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.battleent.blankspace.BlankSpace;
import com.battleent.blankspace.BlankSpacePopup;
import com.codewaves.stickyheadergrid.StickyHeaderGridLayoutManager;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Locale;

public class ViewDoctorScheduleActivity extends AppCompatActivity {

    private static final int SPAN_SIZE = 3;
    private static final int SECTIONS = 10;
    private static final int SECTION_ITEMS = 5;

    private RecyclerView mRecycler;
    private StickyHeaderGridLayoutManager mLayoutManager;

    //Network calls
    private ProgressDialog mProgressDialog;
    String baseUrl = "http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/api/";
    ArrayList<DocDetails> docDetails;

    AppointmentBean ab = null;

    private BlankSpace blankSpace;
    private BlankSpacePopup blankSpacePopup;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_view_doctor_schedule);

        ab  = (AppointmentBean) getIntent().getSerializableExtra("appointmentbean");

        PatientBean pb = ab.getPb();
        String doctorid = ab.getDoctorid();


        Toast.makeText(this,"doctoid",Toast.LENGTH_SHORT).show();

        //network code
        docDetails = new ArrayList<>();
        requestApi(null, baseUrl+"doctorDetails", "GET");

        // Setup recycler
        mRecycler = (RecyclerView)findViewById(R.id.recycler);
        mLayoutManager = new StickyHeaderGridLayoutManager(SPAN_SIZE);
        mLayoutManager.setHeaderBottomOverlapMargin(5);
        mLayoutManager.setSpanSizeLookup(new StickyHeaderGridLayoutManager.SpanSizeLookup() {
            @Override
            public int getSpanSize(int section, int position) {
                return 1;
            }
        });

        // Workaround RecyclerView limitation when playing remove animations. RecyclerView always
        // puts the removed item on the top of other views and it will be drawn above sticky header.
        // The only way to fix this, abandon remove animations :(
        mRecycler.setItemAnimator(new DefaultItemAnimator() {
            @Override
            public boolean animateRemove(RecyclerView.ViewHolder holder) {
                dispatchRemoveFinished(holder);
                return false;
            }
        });
        mRecycler.setLayoutManager(mLayoutManager);














    }

    private void requestApi(JSONObject data, String reqUrl, String method) {

        int reqMethod = method.equalsIgnoreCase("POST") ? Request.Method.POST : Request.Method.GET;

        showProgressDialog("Getting Doctor dates");

        JsonArrayRequest request = new JsonArrayRequest(reqMethod, reqUrl, data, new Response.Listener<JSONArray>() {
            @Override
            public void onResponse(JSONArray response) {
                Log.e("DATA RECEVIED", ""+response);
                parseData(response);
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("DATA FAILED", "");
                Log.e("Custom Volloy Error", "");
                error.printStackTrace();
            }
        });
        AppController.getInstance().addToRequestQueue(request);
    }

    private void parseData(JSONArray response) {
        try{
            for(int i = 0; i < response.length(); i++)
            {
                JSONObject data = response.getJSONObject(i);
                String name = data.getString("name");
                String spec = data.getString("department");
                String id = data.getString("doctorid");
                JSONArray aval = data.getJSONArray("available");
                ArrayList<String> days = new ArrayList<>();
                ArrayList<String> times = new ArrayList<>();
                ArrayList<String> dates = new ArrayList<>();

                String weekDay;
                String date;
                SimpleDateFormat dayFormat = new SimpleDateFormat("EEEE", Locale.US);
                SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy", Locale.US);


                Calendar calendar = Calendar.getInstance();
                Calendar calendardays = Calendar.getInstance();
                weekDay = dayFormat.format(calendar.getTime());
                date = dateFormat.format(calendar.getTime());

                Log.e("date",weekDay + " "+ date);
                String dayorder [] = new String[7];
                for (int d =0;d<7;d++){
                    dayorder[d] = dayFormat.format(calendardays.getTime());
                    calendardays.add(Calendar.DAY_OF_YEAR,1);

                }


                int start = 0;
                for(int j = 0; j < aval.length(); j++)
                {

                    JSONObject timing = aval.getJSONObject(j);
                    if(timing.getString("days").equalsIgnoreCase(weekDay)){
                        start = j;
                    }

                }

                int tStart = start;
                boolean inloop = false;
                for(int j = 0; j < 14; j++)
                {
                    if(j!=0 & start==tStart & inloop)
                        break;


                    JSONObject timing = aval.getJSONObject(start);
                    if(timing.getString("days").equalsIgnoreCase(dayorder[j])){
                        inloop=true;
                        days.add(timing.getString("days"));
                        times.add(timing.getString("time"));
                        dates.add(dateFormat.format(calendar.getTime()));
                        Log.e("dates: ", timing.getString("days")+"    "+ timing.getString("time")+ "   "+dateFormat.format(calendar.getTime()));
                        start++;
                        if(start==aval.length())
                            start=0;
                        calendar.add(Calendar.DAY_OF_YEAR,1);
                    }
                    else{
                        calendar.add(Calendar.DAY_OF_YEAR,1);
                    }




                }
                docDetails.add(new DocDetails(name, spec, id, days, times, dates, ab));
            }
            mRecycler.setAdapter(new SampleAdapter(ViewDoctorScheduleActivity.this,docDetails));
            hideProgressDialog();
        }catch (JSONException e){
            e.printStackTrace();
        }
    }

    private void showProgressDialog(String str) {
        if (mProgressDialog == null) {
            mProgressDialog = new ProgressDialog(this);
            mProgressDialog.setMessage(str);
            mProgressDialog.setIndeterminate(true);
        }
        mProgressDialog.show();
    }

    private void hideProgressDialog() {
        if (mProgressDialog != null && mProgressDialog.isShowing()) {
            mProgressDialog.hide();
        }
    }

}
