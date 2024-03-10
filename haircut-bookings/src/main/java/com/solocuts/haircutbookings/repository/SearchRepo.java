package com.solocuts.haircutbookings.repository;

import java.util.List;

import com.solocuts.haircutbookings.model.HaircutInfo;

public interface SearchRepo {
    
    List<HaircutInfo> findByText(String term);
}
