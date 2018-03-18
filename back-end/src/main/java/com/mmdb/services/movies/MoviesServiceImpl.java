package com.mmdb.services.movies;

import com.mmdb.dao.MovieRepository;
import com.mmdb.model.dto.MovieDTO;
import com.mmdb.model.entities.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoviesServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public List<Movie> getMoviesByGenre(String genre) {
        return movieRepository.findByGenreContaining(genre);
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
