package com.solocuts.joblistings.model;


import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "BarberBookings")
public class Post {
    // all the keys of our mongodb document
    //this is where I change the type of data that my database is receiving 
    private String haircutType; 
    private int haircutPrice;
    private String haircutBookingName;
    private String bookingDate;
    private String bookingTime;
    private String barberInfo; 
    private int barberPrice;
    private int total;


    //constructor
    public Post(){
        //empty because nothing needs to be constructed
    }
    
    //getters and setters

    public void setHaircutType(String haircut) {
        this.haircutType = haircut;
    }

    public String getHaircutType() {
        return haircutType;
    }

    public void setHaircutPrice(int price) {
        this.haircutPrice = price;
    }

    public int getHaircutPrice() {
        return haircutPrice;
    }

    public void setHaircutBookingName(String name) {
        this.haircutBookingName = name;
    }

    public String getHaircutBookingName() {
        return haircutBookingName;
    }

    public void setBookingDate(String date) {
        this.bookingDate = date;
    }

    public String getBookingDate() {
        return bookingDate;
    }

    public void setBookingTime(String time) {
        this.bookingTime = time;
    }

    public String getBookingTime() {
        return bookingTime;
    }

    public void setBarber(String barber) {
        this.barberInfo = barber;
    }

    public String getBarberInfo() {
        return barberInfo;
    }

    public void setBarberPrice(int barberPrice) {
        this.barberPrice = barberPrice;
    }

    public int getbarberPrice() {
        return barberPrice;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public int getTotal() {
        return total;
    }


    //toString for confirming accurate data has been read
    @Override
    public String toString() {
        return "Post{" +
                "haircutType='" + haircutType + '\'' +
                ", haircutPrice='" + haircutPrice + '\'' +
                ", haircutBookingName='" + haircutBookingName + '\'' +
                ", bookingDate=" + bookingDate +
                ", bookingTime=" + bookingTime +
                ", barberInfo=" + barberInfo +
                ", barberPrice=" + barberPrice +
                ", total=" + total +
                '}';
    }
}
