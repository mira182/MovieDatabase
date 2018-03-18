package com.mmdb.services.movies;


import com.mmdb.model.dto.MovieDTO;
import com.mmdb.model.entities.Movie;

import java.util.List;

public interface MovieService {

    List<Movie> getAllMovies();

    Movie saveMovie(MovieDTO movieDto);

    List<Movie> getMoviesByGenre(String genre);

}
