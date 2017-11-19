package com.genesis.patient;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.PixelFormat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutCompat;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.PopupWindow;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.battleent.blankspace.BlankSpace;
import com.battleent.blankspace.BlankSpaceAnimation;
import com.battleent.blankspace.BlankSpacePopup;
import com.google.api.client.json.Json;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Locale;
import java.util.concurrent.ExecutionException;

public class AppointmentBooked extends AppCompatActivity {

    private ProgressDialog mProgressDialog;
    String baseUrl = "http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/api/";
    private DocDetails docDetails;

    AppointmentBean ab = null;



    PopupWindow pw = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout_confirmation);

        ab  = (AppointmentBean) getIntent().getSerializableExtra("appointmentbean");

//        LinearLayout lay = (LinearLayout) findViewById(R.id.layout_container);
//        pw = new PopupWindow(((LayoutInflater) getApplicationContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE)).inflate(R.layout.layout_confirmation, lay, true), ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT,true);
//        View pop_view = pw.getContentView();
//
//        pw.setOutsideTouchable(false);
//        pw.showAtLocation(lay,Gravity.CENTER,0,0);
//
////        WindowManager.LayoutParams params=new WindowManager.LayoutParams(
//                WindowManager.LayoutParams.WRAP_CONTENT,
//                WindowManager.LayoutParams.WRAP_CONTENT,
//                WindowManager.LayoutParams.TYPE_PHONE,
//                WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,
//                PixelFormat.OPAQUE);
//        LayoutInflater layoutInflater=(LayoutInflater)getSystemService(Context.LAYOUT_INFLATER_SERVICE);
//        View view=layoutInflater.inflate(R.layout.layout_confirmation, null);
//
//
//        params.gravity= Gravity.CENTER;
//        params.x=0;
//        params.y=0;
//        WindowManager windowManager2 = (WindowManager)getSystemService(WINDOW_SERVICE);
//        windowManager2.addView(view, params);




        Button confirm = (Button)findViewById(R.id.confirm_book);
        Button cancel = (Button) findViewById(R.id.cancel_book);
        confirm.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                PatientBean pb = ab.getPb();

                JSONObject data = new JSONObject();
                try {
                    data.put("googleid",pb.getGoogleID());
                    data.put("email",pb.getEmail());
                    data.put("doctorid",ab.getDoctorid());
                    data.put("time",ab.getTime().substring(0,ab.getTime().indexOf("-")));
                    data.put("doctorName",ab.getDoctorName());
                    data.put("date",ab.getDate());



                    Log.e("REQUEST ",data.toString() );
                    requestApi(data, "http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/api/booking", "POST");

                } catch (JSONException e) {
                    e.printStackTrace();
                }

                setContentView(R.layout.activity_appointment_booked);
                populateCntents();


            }
        });

        cancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                pw.dismiss();
                Intent i = new Intent(AppointmentBooked.this, AppointmentBookinDocSelectActicity.class);
                i.putExtra("appointmentbean",ab);
                startActivity(i);
            }
        });




    }

    private void populateCntents() {




    }


    private void requestApi(JSONObject data, String reqUrl, String method) {

        int reqMethod = method.equalsIgnoreCase("POST") ? Request.Method.POST : Request.Method.GET;

        showProgressDialog("booking apppointment");
        Log.e("checking ","in request with " + data.toString()+" "+ reqUrl+" "+ method);

        JsonObjectRequest request = new JsonObjectRequest(reqMethod, reqUrl, data, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Log.e("DATA RECEVIED", ""+response);
                parseData(response);
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("DATA FAILED", "");
                Log.e("Custom Volley Error", "");
                error.printStackTrace();
            }
        });
        AppController.getInstance().addToRequestQueue(request);
    }

    private void parseData(JSONObject response) {
        hideProgressDialog();
        Log.e("response  " ,response.toString());
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
