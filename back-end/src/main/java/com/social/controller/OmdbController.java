package com.social.controller;

import com.social.model.dto.OmdbMovieDTO;
import com.social.services.importing.MovieDataImporter;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/omdb")
public class OmdbController {

    @Autowired
    private MovieDataImporter omdbMoviesDataImporter;

    @RequestMapping(value="/omdbMovie", method = RequestMethod.GET)
    public OmdbMovieDTO getOmdbMovieDetails(@RequestParam(name = "title") String movieTitle) throws IOException {
        return omdbMoviesDataImporter.getMovieData(movieTitle);
    }

    @RequestMapping(value="/importMovies", method = RequestMethod.POST)
    public void importOmdbMovies(@RequestBody String movieTitles) {
        omdbMoviesDataImporter.importMoviesData(movieTitles);
    }

    @RequestMapping(value="/importMovie", method = RequestMethod.GET)
    public void importOmdbMovie(@RequestParam("title")String movieTitle) {
        omdbMoviesDataImporter.importMovieData(movieTitle);
    }
}