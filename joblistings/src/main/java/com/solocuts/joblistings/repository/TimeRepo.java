package com.solocuts.joblistings.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.solocuts.joblistings.model.TimeInfo;

public interface TimeRepo extends MongoRepository <TimeInfo, Integer>
{
    
}
