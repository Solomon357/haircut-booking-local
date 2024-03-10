package com.solocuts.haircutbookings.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solocuts.haircutbookings.model.BarberInfo;
import com.solocuts.haircutbookings.repository.BarberRepo;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BarberInfoController {
    //object that will allow CRUD operations
    //the only one we will use for now is read
    @Autowired
    BarberRepo barberRepo;

    //method for getting all barber data
    @GetMapping("/allBarberInfo")
    @CrossOrigin
    public List<BarberInfo> getAllBarberInfos()
    {
        //GET request for all records in database
        return barberRepo.findAll();
    }
}
