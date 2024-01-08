package com.solocuts.joblistings.repository;

import com.solocuts.joblistings.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

//this interface is how we connect to our mongoDB
//the mongo repo that we've extended will handle all the CRUD operations for us
// so we don't need to write any methods
//if we're doing something thats not CRUD aka searching then we need to implement the logic ourselves liek in SearchRepo
public interface PostRepo extends MongoRepository<Post, String>
{
    
}
