package com.mmdb.controller;

import com.mmdb.model.dto.MovieDTO;
import com.mmdb.model.entities.Movie;
import com.mmdb.services.importing.OmdbMoviesDataImporter;
import com.mmdb.services.movies.MoviesServiceImpl;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/movies", produces = MediaType.APPLICATION_JSON_VALUE)
public class MoviesController {

    private static final Logger logger = LogManager.getLogger(MoviesController.class);

    @Autowired
    private MoviesServiceImpl moviesServiceImpl;

    @GetMapping
    public List<Movie> getAllMovies() {
        return moviesServiceImpl.getAllMovies();
    }

    @PostMapping
    public Movie saveMovie(@RequestBody MovieDTO movieDTO) {
        return moviesServiceImpl.saveMovie(movieDTO);
    }

    @RequestMapping(method = RequestMethod.GET, params = "genre")
    public List<Movie> getMoviesByGenre(String genre) {
        List<Movie> movies = moviesServiceImpl.getMoviesByGenre(genre);
        System.out.println(movies);
        return movies;
    }
}
