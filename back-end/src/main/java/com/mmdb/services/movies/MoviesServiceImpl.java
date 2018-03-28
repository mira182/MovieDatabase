package com.mmdb.services.movies;

import com.mmdb.dao.MovieRepository;
import com.mmdb.model.dto.MovieDTO;
import com.mmdb.model.dto.builders.MovieDTOBuilder;
import com.mmdb.model.entities.Movie;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MoviesServiceImpl implements MovieService {

    private static final Logger logger = LogManager.getLogger(MoviesServiceImpl.class);

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<MovieDTO> getAllMovies() {
        final List<MovieDTO> movies = new ArrayList<>();
        movieRepository.findAll().forEach((Movie movieEntity) -> {
            movies.add(new MovieDTOBuilder()
                    .setName(movieEntity.getName())
                    .setActors(movieEntity.getActors())
                    .setCountry(movieEntity.getCountry())
                    .setDescription(movieEntity.getDescription())
                    .setDirectors(movieEntity.getDirectors())
                    .setGenre(movieEntity.getGenre())
                    .setImdbRating(movieEntity.getImdbRating())
                    .setLength(movieEntity.getLength())
                    .setPosterUrl(movieEntity.getPosterUrl())
                    .setProduction(movieEntity.getProduction())
                    .setYear(movieEntity.getYear())
                    .setId(movieEntity.getId())
                    .createMovieDTO());
        });
        return movies;
    }

    @Override
    public void deleteMovie(Long id) {
        logger.debug("Deleting movie with ID: {} from database.", id);
        movieRepository.delete(id);
    }

    @Override
    public Movie saveMovie(MovieDTO movieDto) {
        final Movie movie = new Movie();
        movie.setName(movieDto.getName());
        movie.setCountry(movieDto.getCountry());
        movie.setProduction(movieDto.getProduction());
        movie.setYear(movieDto.getYear());
        movie.setActors(movieDto.getActors());
        movie.setDescription(movieDto.getDescription());
        movie.setDirectors(movieDto.getDirectors());
        movie.setImdbRating(movieDto.getImdbRating());
        movie.setPosterUrl(movieDto.getPosterUrl());
        movie.setGenre(movieDto.getGenre());
        movie.setLength(movieDto.getLength());
//        try {
//            movie.setPoster(ImageDownloader.downloadImage(omdbMovieDTO.getPosterUrl()));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        return movieRepository.save(movie);
    }
}
