package com.solocuts.joblistings.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "BarberOptions")
public class BarberInfo {

    private String barber;
    private int id;


    //constructor
    public BarberInfo(){
        //empty because nothing needs to be constructed
    }

    public String getBarber() {
        return barber;
    }
    public void setBarber(String barber) {
        this.barber = barber;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }


    @Override
    public String toString() {
        return "BarberInfo{" +
        "barber='" + barber + '\'' + 
        "id='" + id + '\'' + 
        '}';
    }
}
