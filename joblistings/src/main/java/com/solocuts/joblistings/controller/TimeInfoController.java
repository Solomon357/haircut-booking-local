package com.solocuts.joblistings.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import com.solocuts.joblistings.model.TimeInfo;
import com.solocuts.joblistings.repository.TimeRepo;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TimeInfoController {
    //object that will allow CRUD operations
    //the only one we will use is read tho
    @Autowired
    TimeRepo timeRepo;

    //method for getting all time options in db
    @GetMapping("/allTimeInfo")
    @CrossOrigin
    public List<TimeInfo> getAllTimeInfos()
    {
        //GET request for all records in database
        return timeRepo.findAll();
    }
}
