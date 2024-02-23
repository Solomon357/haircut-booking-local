package com.solocuts.joblistings.controller;

import org.springframework.web.bind.annotation.RestController;

import com.solocuts.joblistings.model.Post;
import com.solocuts.joblistings.repository.PostRepo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


//this will control all functionality of the job posts 
@RestController
//to connect this with reactjs ui
@CrossOrigin(origins = "http://localhost:3000")// im assuming i can add multiple origins here, which means I can also include the hosting link when i get to that

public class PostController 
{   
    //auto wired means that Spring will create an object for me and map it automatically 
    @Autowired
    PostRepo repo; //repo is an object of class PostRepo that can do CRUD operations.

    //returns the endpoint 
    @GetMapping("/allPosts")
    @CrossOrigin
    public List<Post> getAllPosts()
    {
        //GET request for all records in database
        return repo.findAll();
    }

    //method for submitting a booking data
    @PostMapping("/submitpost") //we use post mapping as it corresponds with the HTTPS POST request
    @CrossOrigin
    public Post addPost(@RequestBody Post post)
    {
        return repo.save(post);
    }  
}
