package com.mmdb.controller;

import com.mmdb.model.dto.OmdbMovieDTO;
import com.mmdb.model.dto.OmdbMoviesDTO;
import com.mmdb.model.dto.OmdbTvShowDTO;
import com.mmdb.model.dto.TestDTO;
import com.mmdb.services.importing.MovieDataImporter;
import com.mmdb.services.importing.OmdbMoviesDataImporter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/omdb")
public class OmdbController {

    private static final Logger logger = LogManager.getLogger(OmdbController.class);

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
        logger.debug("Storing list of movies {}", movies);
//        for (OmdbMovieDTO movie : omdbMoviesDTO.getOmdbMovies()) {
//            omdbMoviesDataImporter.storeOmdbMovie(movie);
//        }

        return true;
    }

    @RequestMapping(value="/storeOmdbTvShow", method = RequestMethod.POST)
    public boolean storeOmdbTvShow(@RequestBody OmdbTvShowDTO omdbTvShowDTO) {
        return omdbMoviesDataImporter.storeOmdbTvShow(omdbTvShowDTO);
    }
}