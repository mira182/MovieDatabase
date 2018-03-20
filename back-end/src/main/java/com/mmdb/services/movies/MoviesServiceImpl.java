package com.mmdb.services.movies;

import com.mmdb.dao.MovieRepository;
import com.mmdb.model.dto.MovieDTO;
import com.mmdb.model.dto.builders.MovieDTOBuilder;
import com.mmdb.model.entities.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MoviesServiceImpl implements MovieService {

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
                    .createMovieDTO());
        });
        return movies;
    }

    @Override
    public List<MovieDTO> getMoviesByGenre(String genre) {
        final List<MovieDTO> movies = new ArrayList<>();
        movieRepository.findByGenreContaining(genre).forEach((Movie movieEntity) -> {
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
                    .createMovieDTO());
        });
        return movies;
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
        System.out.println(movie);
        return movieRepository.save(movie);
    }
}
