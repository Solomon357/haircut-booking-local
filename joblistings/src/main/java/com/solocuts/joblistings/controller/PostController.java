package com.solocuts.joblistings.controller;

import org.springframework.web.bind.annotation.RestController;

import com.solocuts.joblistings.model.Post;
import com.solocuts.joblistings.repository.PostRepo;
import com.solocuts.joblistings.repository.SearchRepo;

import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    PostRepo repo; //repo is an object of class PostRepo that can do CRUD oper.

    // srepo is a object of class SearchRepo that handles the search
    @Autowired
    SearchRepo srepo;

    @RequestMapping("/")
    public void redirect(HttpServletResponse response) throws IOException {
        // "/" might be replaced with whatever my reactjs homepage will be
        response.sendRedirect("/");
    }

    //returns the endpoint 
    @GetMapping("/allPosts")
    @CrossOrigin
    public List<Post> getAllPosts()
    {
        //GET request for all records in database
        return repo.findAll();
    }

    //searching for specific endpoints
    @GetMapping("/posts/{term}")
    @CrossOrigin
    public List<Post> search(@PathVariable String term)
    {
        return srepo.findByText(term);
    }

    //functionality of submitting a job post

    //we use post mapping as it corresponds with the HTTPS POST request
    @PostMapping("/submitpost")
    @CrossOrigin
    public Post addPost(@RequestBody Post post)
    {
        return repo.save(post);
    }
    
}
