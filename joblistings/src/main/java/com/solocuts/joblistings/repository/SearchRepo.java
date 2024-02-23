package com.solocuts.joblistings.repository;

import java.util.List;

import com.solocuts.joblistings.model.HaircutInfo;

public interface SearchRepo {
    
    List<HaircutInfo> findByText(String term);
}
