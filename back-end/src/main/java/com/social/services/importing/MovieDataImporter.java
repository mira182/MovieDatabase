package com.social.services.importing;

import com.social.model.dto.OmdbMovieDTO;

import java.util.List;

public interface MovieDataImporter {

    OmdbMovieDTO getMovieData(String title);

    List<OmdbMovieDTO> getMoviesData(String titles);

    void importMovieData(String title);

    void importMoviesData(String title);
}