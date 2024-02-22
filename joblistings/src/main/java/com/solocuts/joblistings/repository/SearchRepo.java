package com.solocuts.joblistings.repository;

import java.util.List;

import com.solocuts.joblistings.model.Info;

public interface SearchRepo {
    
    List<Info> findByText(String term);
}
