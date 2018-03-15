package com.social.services.importing;

import com.social.model.dto.OmdbMovieDTO;

import java.io.IOException;
import java.util.List;

public interface MovieDataImporter {

    OmdbMovieDTO getMovieData(String title) throws IOException;

    List<OmdbMovieDTO> getMoviesData(String titles);

    void importMovieData(String title);

    void importMoviesData(String title);
}