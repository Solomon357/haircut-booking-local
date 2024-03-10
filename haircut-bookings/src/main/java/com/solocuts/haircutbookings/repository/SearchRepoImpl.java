package com.solocuts.haircutbookings.repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.solocuts.haircutbookings.model.HaircutInfo;

import org.bson.Document;

//might be up for deletion icl
//if i can implement search in the ui side then this will be useless

@Component
public class SearchRepoImpl implements SearchRepo{

    @Autowired
    MongoClient client;

    @Autowired
    MongoConverter converter;


    @Override
    public List<HaircutInfo> findByText(String term) {

       final List<HaircutInfo> posts = new ArrayList<>();

       //now its time to fill the array before returning it
       //looks complicated but what we're essenitally doing is 
       //just copying the search aggregate pipeline in java format

       //because java is java it looks complex but the below code is no
       //different to a JSON structure telling mongoDB how to search

       MongoDatabase database = client.getDatabase("haircutApp");
       MongoCollection<Document> collection = database.getCollection("HaircutOptions");
       AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search", 
       //going to have to include index name now in this pipeline
        new Document("text", 
        new Document("query", term)
        .append("path","value"))), 
        new Document("$sort", 
        new Document("value", 1L)) 
        //new Document("$limit", 5L)
        ));
       
       //because its java we're doing a lambda to cconvert a document format to a java format so spring can actually use this data
       result.forEach(doc -> posts.add(converter.read(HaircutInfo.class, doc)));

       return posts;
    }
    
    
}
