package com.genesis.patient;

/**
 * Created by asif on 19/11/17.
 */

public class AppointmentDetails {

    private String docName, timeAndDate;

    public AppointmentDetails(String docName, String timeAndDate) {
        this.docName = docName;
        this.timeAndDate = timeAndDate;
    }

    public String getDocName() {
        return docName;
    }

    public String getTimeAndDate() {
        return timeAndDate;
    }

}