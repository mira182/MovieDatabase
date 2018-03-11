package com.social.services.movies;


import com.social.model.dto.MovieDTO;
import com.social.model.entities.Movie;

import java.util.List;

public interface MovieService {

    List<Movie> getAllMovies();

    Movie saveMovie(MovieDTO movieDto);

    void importMovieDataFromImdb(String movieName);
}
