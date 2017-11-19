package com.genesis.patient;

import android.app.ProgressDialog;
import android.graphics.drawable.GradientDrawable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.DividerItemDecoration;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;


public class ViewAppointmentActivity extends AppCompatActivity {

    // recyclerVew initaiation
    private RecyclerView recyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager layoutManager;

    //Network calls
    private ProgressDialog mProgressDialog;
    String baseUrl = "http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/api/";

    ArrayList<AppointmentDetails> appDetails;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_doc_appointment);

        appDetails = new ArrayList<>();
        recyclerView = (RecyclerView) findViewById(R.id.view_doc_appointment);
        // use this setting to
        // improve performance if you know that changes
        // in content do not change the layout size
        // of the RecyclerView
        recyclerView.setHasFixedSize(true);
        // use a linear layout manager
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        List<String> input = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            input.add("Test" + i);
        }// define an adapter
//        mAdapter = new DocDetailsAdapter(input);
//        recyclerView.setAdapter(mAdapter);


        try{
            JSONObject data = new JSONObject();
            String id = "107069485718688772042";
            data.put("googleid", id);
            requestApi(data, baseUrl+"currentAppointements", "POST");
        }catch(JSONException jsoneError){
            jsoneError.printStackTrace();
        }


    }


    private void requestApi(JSONObject data, String reqUrl, String method) {

        int reqMethod = method.equalsIgnoreCase("POST") ? Request.Method.POST : Request.Method.GET;

        showProgressDialog("Getting Doctor dates");

        JsonArrayRequest request = new JsonArrayRequest(reqMethod, reqUrl, data, new Response.Listener<JSONArray>() {
            @Override
            public void onResponse(JSONArray response) {
                Log.e("DATA RECEVIED", ""+response);
               // Toast.makeText(ViewAppointmentActivity.this, response.toString(), Toast.LENGTH_LONG).show();
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
        hideProgressDialog();
        try{
            for(int i = 0; i < response.length(); i++){
                JSONObject data = response.getJSONObject(i);
                appDetails.add(new AppointmentDetails(data.getString("doctorName"), data.getString("date")));
            }
        }catch (JSONException e){
            e.printStackTrace();
        }
        mAdapter = new DocDetailsAdapter(appDetails);
        recyclerView.setAdapter(mAdapter);
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