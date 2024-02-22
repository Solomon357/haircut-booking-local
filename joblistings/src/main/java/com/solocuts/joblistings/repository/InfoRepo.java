package com.solocuts.joblistings.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.solocuts.joblistings.model.Info;

//the mongo repo will handle all CRUD operations for us
public interface InfoRepo extends MongoRepository<Info, String> 
{

} 
