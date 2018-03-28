package com.mmdb.controller;

import com.mmdb.model.dto.OmdbMovieDTO;
import com.mmdb.services.importing.MovieDataImporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/omdb")
public class OmdbController {

    @Autowired
    private MovieDataImporter omdbMoviesDataImporter;

    @RequestMapping(value="/importMovies", method = RequestMethod.POST)
    public void importOmdbMovies(@RequestBody String movieTitles) {
        omdbMoviesDataImporter.importMoviesData(movieTitles);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value="/importTvShows", method = RequestMethod.POST)
    public void importOmdbTvShows(@RequestBody String tvShowsTitles) {
        omdbMoviesDataImporter.importTvShowsData(tvShowsTitles);
    }

    @RequestMapping(value="/storeOmdbMovie", method = RequestMethod.POST)
    public boolean storeOmdbMovie(@RequestBody OmdbMovieDTO omdbMovieDTO) {
        return omdbMoviesDataImporter.storeOmdbMovie(omdbMovieDTO);
    }
}