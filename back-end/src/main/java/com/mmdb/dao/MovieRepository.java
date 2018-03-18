package com.mmdb.dao;

import com.mmdb.model.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    Movie findByName(String movieName);

    List<Movie> findByGenreContaining(String genre);
}
