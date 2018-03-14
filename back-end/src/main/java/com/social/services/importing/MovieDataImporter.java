package com.social.services.importing;

import com.social.model.dto.MovieDTO;

import java.util.List;

public interface MovieDataImporter {

    MovieDTO getMovieData(String title);

    List<MovieDTO> getMoviesData(String titles);

    void importMovieData(String title);

    void importMoviesData(String title);
}