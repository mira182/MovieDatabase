package com.mmdb.services.importing;

import com.mmdb.model.dto.OmdbMovieDTO;

import java.io.IOException;

public interface MovieDataImporter {

    void importMoviesData(String movieTitles);

    void importTvShowsData(String tvShowsTitles);

    boolean storeOmdbMovie(OmdbMovieDTO omdbMovieDTO);
}