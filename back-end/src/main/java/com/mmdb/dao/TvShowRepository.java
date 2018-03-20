package com.mmdb.dao;

import com.mmdb.model.entities.TvShow;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TvShowRepository extends JpaRepository<TvShow, Long> {

    TvShow findByName(String movieName);

    List<TvShow> findByGenreContaining(String genre);
}
