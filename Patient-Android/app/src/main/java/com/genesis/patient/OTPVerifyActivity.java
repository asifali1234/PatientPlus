package com.genesis.patient;

import android.app.ProgressDialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.google.gson.Gson;

import org.json.JSONException;
import org.json.JSONObject;

public class OTPVerifyActivity extends AppCompatActivity {

    private static final String TAG = LoginActivity.class.getSimpleName();

    Button verify;

    CustomEditText otp;
    PatientBean pb;

    private ProgressDialog mProgressDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_otpverify);


        pb = (PatientBean) getIntent().getSerializableExtra("patientbean");
        verify = (Button) findViewById(R.id.patient_verify);
        otp = (CustomEditText) findViewById(R.id.patient_otp);
        JSONObject phoneNumber = new JSONObject();

        try {

            String example_url = "http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/api/mobileVerification";


            phoneNumber.put("mobilenumber",pb.getPhn());
            phoneNumber.put("googleid",pb.getGoogleID());
            Log.e(TAG,phoneNumber.toString());

            requestApi(phoneNumber, example_url, "POST",1);
        } catch (JSONException e) {
            Log.e(TAG,"Json error 101 "+ e.toString());
            e.printStackTrace();
        }




        verify.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {




                String otp_entered = otp.getText().toString();

                JSONObject userOTP = new JSONObject();

                try {

                    String example_url = "http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/api/verify";


                    userOTP.put("otpno",otp_entered);
                    userOTP.put("googleid",pb.getGoogleID());
                    Log.e(TAG,userOTP.toString());

                    requestApi(userOTP, example_url, "POST",2);
                } catch (JSONException e) {
                    Log.e(TAG,"Json error 102 "+ e.toString());
                    e.printStackTrace();
                }

                // #########################################################################################################
                // Verify otp
                //##########################################################################################################




            }
        });


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

    private void requestApi(JSONObject data, String reqUrl, String method, final int reqtyoe) {

        int reqMethod = method.equalsIgnoreCase("POST") ? Request.Method.POST : Request.Method.GET;

        switch (reqtyoe){
            case 1: //showProgressDialog("Sending");
                break;
            case 2: showProgressDialog("Verifying");
                break;
            case 3: //showProgressDialog("Registering");
                break;
        }
        JsonObjectRequest request = new JsonObjectRequest(reqMethod, reqUrl, data, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Log.e(TAG,"Volley Response" + response.toString());

                switch (reqtyoe){
                    case 1: parseMobileSend(response);
                        break;
                    case 2: parseVerify(response);
                        break;
                    case 3: parseRegister(response);
                        break;
                }

            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e(TAG,"Volley Error my" + error.toString());

            }
        });
        AppController.getInstance().addToRequestQueue(request);
    }

    public void parseVerify(JSONObject verified){
        Log.e(TAG,verified.toString());
        hideProgressDialog();
        String otp_entered = "";
        try {
            otp_entered = String.valueOf(verified.getBoolean("verified"));

        } catch (JSONException e) {
            e.printStackTrace();
        }

        if(otp_entered.equalsIgnoreCase("true")){





            SharedPreferences preferences = getApplicationContext().getSharedPreferences("patientbean", 0);
            SharedPreferences.Editor editor = preferences.edit();
            Gson gson = new Gson();
            String pbString = gson.toJson(pb);
            editor.putString("patientbean",pbString);
            editor.apply();

            String jsonret = preferences.getString("patientbean","");
            PatientBean pbret = gson.fromJson(jsonret,PatientBean.class);
            hideProgressDialog();

            Intent i = new Intent(OTPVerifyActivity.this,PatientActivity.class);
            i.putExtra("patientbean",pb);
            startActivity(i);

        }
        else {
            hideProgressDialog();
            Toast.makeText(OTPVerifyActivity.this,"OTP is wrong",Toast.LENGTH_LONG).show();
        }






    }

    public void parseMobileSend(JSONObject patient){
        Log.e(TAG,patient.toString());


        //hideProgressDialog();

    }

    public void parseRegister(JSONObject patient){
        Log.e(TAG,patient.toString());


       /// hideProgressDialog();

    }



}
