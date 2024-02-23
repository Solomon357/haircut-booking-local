package com.solocuts.joblistings.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solocuts.joblistings.model.Info;
import com.solocuts.joblistings.repository.InfoRepo;
//import com.solocuts.joblistings.repository.SearchRepo;

import jakarta.servlet.http.HttpServletResponse;

// this is where i will create all the methods that control
// the reading and filtering of the "haircutOptions" collection


@RestController
@CrossOrigin(origins = "http://localhost:3000")// im assuming i can add multiple origins here, which means I can also include the hosting link when i get to that

public class InfoController 
{
    //object that will allow CRUD operations
    //the only one we will use is read tho
    @Autowired
    InfoRepo repo;

    // srepo is a object of class SearchRepo that handles the search
    // @Autowired
    // SearchRepo srepo;

    //in the tutorial, this is for the swagger API which i do not have,
    // not sure if i can repurpose this for something else later bare with me
    // @RequestMapping("/")
    // public void redirect(HttpServletResponse response) throws IOException {
    //     // "/" might be replaced with whatever my reactjs homepage will be
    //     response.sendRedirect("/");
    // }

    @GetMapping("/allInfo")
    @CrossOrigin
    public List<Info> getAllInfos()
    {
        //GET request for all records in database
        return repo.findAll();
    }

    // //searching for specific endpoints
    // @GetMapping("/info/{term}")
    // @CrossOrigin
    // public List<Info> search(@PathVariable String term)
    // {
    //     return srepo.findByText(term);
    // }
}
