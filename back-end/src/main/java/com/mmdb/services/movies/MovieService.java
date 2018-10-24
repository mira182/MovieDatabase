package com.mmdb.services.movies;


import com.mmdb.model.dto.internal.MovieDTO;
import com.mmdb.model.entities.Movie;
import org.springframework.data.domain.Page;

import java.util.List;

public interface MovieService {

    List<MovieDTO> getAllMovies();

    MovieDTO getMovie(Long id);

    Movie saveMovie(MovieDTO movieDto);

    void deleteMovie(Long id);

    Page<MovieDTO> getPaginatedMovies(int page, int size);

    List<String> getAllActors();

    /**   STATIC METHODS ***/
    static MovieDTO convertEntityToDTO(Movie movie) {
        return MovieDTO.builder()
                .actors(movie.getActors())
                .country(movie.getCountry())
                .description(movie.getDescription())
                .directors(movie.getDirectors())
                .genre(movie.getGenre())
                .id(movie.getId())
                .imdbRating(movie.getImdbRating())
                .length(movie.getLength())
                .name(movie.getName())
                .posterUrl(movie.getPosterUrl())
                .production(movie.getProduction())
                .year(movie.getYear())
                .build();
    }

    static Movie convertDTOToEntity(MovieDTO movie) {
        return Movie.builder()
                .actors(movie.getActors())
                .country(movie.getCountry())
                .description(movie.getDescription())
                .directors(movie.getDirectors())
                .genre(movie.getGenre())
                .id(movie.getId())
                .imdbRating(movie.getImdbRating())
                .length(movie.getLength())
                .name(movie.getName())
                .posterUrl(movie.getPosterUrl())
                .production(movie.getProduction())
                .year(movie.getYear())
                .build();
        // TODO poster data keep ???
        //        try {
//            movie.setPoster(ImageDownloader.downloadImage(omdbMovieDTO.getPosterUrl()));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
    }
}
