package com.solocuts.haircutbookings.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solocuts.haircutbookings.model.HaircutInfo;
import com.solocuts.haircutbookings.repository.HaircutRepo;


@RestController
@CrossOrigin(origins = "http://localhost:3000")// im assuming i can add multiple origins here, which means I can also include the hosting link when i get to that

public class HaircutInfoController 
{
    //object that will allow CRUD operations
    //the only one we will use is read tho
    @Autowired
    HaircutRepo hairRepo;

    // srepo is a object of class SearchRepo that handles the search
    // @Autowired
    // SearchRepo srepo;


    // method for fetching all haircut data
    @GetMapping("/allHaircutInfo")
    @CrossOrigin
    public List<HaircutInfo> getAllHaircutInfos()
    {
        //GET request for all records in database
        return hairRepo.findAll();
    }



    // method for searching specific endpoints by term
    // @GetMapping("/info/{term}")
    // @CrossOrigin
    // public List<Info> search(@PathVariable String term)
    // {
    //     return srepo.findByText(term);
    // }
}
