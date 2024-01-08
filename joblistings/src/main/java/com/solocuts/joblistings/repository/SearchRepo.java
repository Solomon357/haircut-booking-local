package com.solocuts.joblistings.repository;

import java.util.List;

import com.solocuts.joblistings.model.Post;

public interface SearchRepo {
    
    List<Post> findByText(String term);
}
