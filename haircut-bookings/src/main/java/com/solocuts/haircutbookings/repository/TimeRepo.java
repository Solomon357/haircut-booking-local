package com.solocuts.haircutbookings.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.solocuts.haircutbookings.model.TimeInfo;

public interface TimeRepo extends MongoRepository <TimeInfo, Integer>
{
    
}
