package com.solocuts.joblistings.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "TimeOptions")
public class TimeInfo {
    
    private String time;
    private int id;


    //constructor
    public TimeInfo(){
        //nothing needs to be constructed
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "TimeInfo{" +
        "time='" + time + '\'' + 
        "id='" + id + '\'' + 
        '}';
    }

}
