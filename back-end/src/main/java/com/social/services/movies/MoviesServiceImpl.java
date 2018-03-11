package com.social.services.movies;

import com.social.dao.MovieRepository;
import com.social.model.entities.Movie;
import com.social.model.dto.MovieDTO;
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
    public Movie saveMovie(MovieDTO movieDto) {
        final Movie movie = new Movie();
        movie.setName(movieDto.getName());
        movie.setYear(movieDto.getYear());
        movie.setDescription(movieDto.getDescription());
        movie.setImdbRating(movieDto.getImdbRating());
        movie.setLength(movieDto.getLength());
        return movieRepository.save(movie);
    }

    @Override
    public void importMovieDataFromImdb(String movieName) {
        // TODO implement
    }
}
