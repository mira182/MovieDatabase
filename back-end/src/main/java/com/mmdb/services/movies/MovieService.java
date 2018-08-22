package com.mmdb.services.movies;


import com.mmdb.model.dto.MovieDTO;
import com.mmdb.model.entities.Movie;
import org.springframework.data.domain.Page;

import java.util.List;

public interface MovieService {

    List<MovieDTO> getAllMovies();

    MovieDTO getMovie(Long id);

    Movie saveMovie(MovieDTO movieDto);

    void deleteMovie(Long id);

    Page<MovieDTO> findPaginated(int page, int size);
}
