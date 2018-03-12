package com.social.controller;

import com.social.model.dto.OmdbMovieDTO;
import com.social.services.importing.OmdbMoviesDataImporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/omdb")
public class OmdbController {

    @Autowired
    private OmdbMoviesDataImporter omdbMoviesDataImporter;

    @RequestMapping(value="/omdbMovie", method = RequestMethod.GET)
    public OmdbMovieDTO getOmdbMovieDetails(@RequestParam(name = "title") String movieTitle){
        return omdbMoviesDataImporter.getMovieData(movieTitle);
    }

    @RequestMapping(value="/importMovies", method = RequestMethod.POST)
    public void importOmdbMovies(List<String> movieTitles) {
        omdbMoviesDataImporter.importMoviesData(movieTitles);
    }
}