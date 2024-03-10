package com.solocuts.haircutbookings.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.solocuts.haircutbookings.model.HaircutInfo;

//this interface is how we connect to our mongoDB
//the mongo repo that we've extended will handle all the CRUD operations for us
// so we don't need to write any methods
//if we're doing something thats not CRUD aka searching then we need to implement the logic ourselves like in SearchRepo
public interface HaircutRepo extends MongoRepository<HaircutInfo, Integer>
{
    
}
