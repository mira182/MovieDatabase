package com.social.controller;

import com.social.model.dto.MovieDTO;
import com.social.model.dto.OmdbMovieDTO;
import com.social.model.entities.Movie;
import com.social.services.movies.MoviesServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/movies")
public class MoviesController {

    @Autowired
    private MoviesServiceImpl moviesServiceImpl;

    @RequestMapping(method = RequestMethod.GET)
    public List<Movie> getAllMovies() {
        return moviesServiceImpl.getAllMovies();
    }

    @PostMapping
    public Movie saveMovie(@RequestBody MovieDTO movieDTO) {
        return moviesServiceImpl.saveMovie(movieDTO);
    }
}
