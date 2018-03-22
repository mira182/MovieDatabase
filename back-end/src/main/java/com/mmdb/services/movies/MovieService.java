package com.mmdb.services.movies;


import com.mmdb.model.dto.MovieDTO;
import com.mmdb.model.entities.Movie;

import java.util.List;

public interface MovieService {

    List<MovieDTO> getAllMovies();

    Movie saveMovie(MovieDTO movieDto);

    List<MovieDTO> getMoviesByGenre(String genre);

    void deleteMovie(Long id);

}
