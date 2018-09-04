package com.mmdb.services.importing;

import com.mmdb.model.dto.outer.omdb.OmdbMovieDTO;
import com.mmdb.model.dto.outer.omdb.OmdbTvShowDTO;

import java.util.List;

// TODO add TMDb importer
public interface MovieDataImporter {

    void importMoviesData(String movieTitles);

    void importTvShowsData(String tvShowsTitles);

    boolean storeOmdbMovie(OmdbMovieDTO omdbMovieDTO);

    boolean storeOmdbTvShow(OmdbTvShowDTO omdbMovieDTO);

    boolean storeOmdbMovies(List<OmdbMovieDTO> omdbMoviesDTO);

    boolean storeOmdbTvShows(List<OmdbTvShowDTO> tvShows);
}