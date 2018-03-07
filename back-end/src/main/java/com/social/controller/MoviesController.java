package com.social.controller;

import com.social.entities.Movie;
import com.social.services.MoviesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MoviesController {

    @Autowired
    private MoviesService moviesService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Movie> getAllMovies() {
        return moviesService.getAllMovies();
    }

}
