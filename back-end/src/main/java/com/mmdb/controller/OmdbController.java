package com.mmdb.controller;

import com.mmdb.model.dto.OmdbMovieDTO;
import com.mmdb.model.dto.OmdbTvShowDTO;
import com.mmdb.services.importing.MovieDataImporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/omdb")
public class OmdbController {

    @Autowired
    private MovieDataImporter omdbMoviesDataImporter;

    @ResponseStatus(HttpStatus.NO_CONTENT)
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

    @RequestMapping(value="/storeOmdbMovies", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean storeOmdbMovies(@RequestBody List<OmdbMovieDTO> movies) {
        return omdbMoviesDataImporter.storeOmdbMovies(movies);
    }

    @RequestMapping(value="/storeOmdbTvShow", method = RequestMethod.POST)
    public boolean storeOmdbTvShow(@RequestBody OmdbTvShowDTO omdbTvShowDTO) {
        return omdbMoviesDataImporter.storeOmdbTvShow(omdbTvShowDTO);
    }

    @RequestMapping(value="/storeOmdbTvShows", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean storeOmdbTvShows(@RequestBody List<OmdbTvShowDTO> tvShows) {
        return omdbMoviesDataImporter.storeOmdbTvShows(tvShows);
    }
}