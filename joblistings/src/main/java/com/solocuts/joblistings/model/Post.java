package com.solocuts.joblistings.model;

import java.util.Arrays;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "BarberBookings")
public class Post {
    // all the keys of our mongodb document
    //this is where I change the type of data that my database is receiving 
    private Object[] haircut; // originally String profile
    private String name;
    private int price;
    private Object[] barber; // originally String[] techs


    //constructor
    public Post(){
    }
    
    //getters and setters
    public Object[] getHaircut() {
        return haircut;
    }

    public void setHaircut(Object[] haircut) {
        this.haircut = haircut;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Object[] getBarber() {
        return barber;
    }

    public void setBarber(Object[] barber) {
        this.barber = barber;
    }

    //toString for confirming accurate data has been read
    @Override
    public String toString() {
        return "Post{" +
                "haircut='" + Arrays.toString(haircut) + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", barber=" + Arrays.toString(barber) +
                '}';
    }
}
