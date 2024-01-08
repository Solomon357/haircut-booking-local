package com.solocuts.joblistings.repository;

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
import org.bson.Document;
import com.solocuts.joblistings.model.Post;

@Component
public class SearchRepoImpl implements SearchRepo{

    @Autowired
    MongoClient client;

    @Autowired
    MongoConverter converter;


    @Override
    public List<Post> findByText(String term) {

       final List<Post> posts = new ArrayList<>();

       //now its time to fill the array before returning it
       //looks complicated but what we're essenitally doing is 
       //just copying the search aggregate pipeline in java format

       //because java is java it looks complex but the below code is no
       //different to a JSON structure telling mongoDB how to search

       MongoDatabase database = client.getDatabase("soloproject");
       MongoCollection<Document> collection = database.getCollection("JobPost");
       AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search", 
        new Document("text", 
        new Document("query", term)
        .append("path", Arrays.asList("techs", "desc", "profile")))), 
        new Document("$sort", 
        new Document("exp", 1L)), 
        new Document("$limit", 5L)));
       
       //because its java we're doing a lambda to cconvert a document format to a java format so spring can actually use this data
       result.forEach(doc -> posts.add(converter.read(Post.class, doc)));


       return posts;
    }
    
    
}
