package com.solocuts.joblistings.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "HaircutOptions")
public class Info {

    private String value;

    //constructor
    public Info(){
        //empty because nothing needs to be constructed
    }

    public String getValue() {
        return value;
    } 

    public void setValue(String value) {
        this.value = value;
    }
    
    //toString for confirming accurate data has been read
    @Override
    public String toString() {
        return "Info{" +
                "value='" + value + '\'' + 
                '}';
                
    }
}
