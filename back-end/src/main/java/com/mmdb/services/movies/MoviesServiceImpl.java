package com.mmdb.services.movies;

import com.mmdb.dao.MovieRepository;
import com.mmdb.model.dto.internal.MovieDTO;
import com.mmdb.model.entities.Movie;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
public class MoviesServiceImpl implements MovieService {

    private static final Logger logger = LogManager.getLogger(MoviesServiceImpl.class);

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<MovieDTO> getAllMovies() {
        return movieRepository.findAll().stream()
                .map(movie -> MovieService.convertEntityToDTO(movie))
                .collect(Collectors.toList());
    }

    @Override
    public MovieDTO getMovie(Long id) {
        final Movie foundMovie = movieRepository.getOne(id);
        return MovieService.convertEntityToDTO(foundMovie);
    }

    @Override
    public void deleteMovie(Long id) {
        logger.debug("Deleting movie with ID: {} from database.", id);
        movieRepository.delete(id);
    }

    @Override
    public Page<MovieDTO> getPaginatedMovies(int page, int size) {
        final Page<MovieDTO> movies = movieRepository.findAll(new PageRequest(page, size, Sort.Direction.ASC, "name"))
                .map(movie -> MovieService.convertEntityToDTO(movie));
        return movies;
    }

    @Override
    public Movie saveMovie(MovieDTO movieDto) {
        return MovieService.convertDTOToEntity(movieDto);
    }

    @Override
    public List<String> getAllActors() {
        return movieRepository.findAll().stream()
                .flatMap(movie -> movie.getActors().stream())
                .collect(Collectors.toList())
                .stream()
                .distinct()
                .collect(Collectors.toList());
    }
}
