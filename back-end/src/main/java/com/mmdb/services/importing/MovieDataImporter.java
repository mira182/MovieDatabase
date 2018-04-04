package com.mmdb.services.importing;

import com.mmdb.model.dto.OmdbMovieDTO;
import com.mmdb.model.dto.OmdbTvShowDTO;

public interface MovieDataImporter {

    void importMoviesData(String movieTitles);

    void importTvShowsData(String tvShowsTitles);

    boolean storeOmdbMovie(OmdbMovieDTO omdbMovieDTO);

    boolean storeOmdbTvShow(OmdbTvShowDTO omdbMovieDTO);
}