package com.mmdb.util;

import com.mmdb.model.dto.internal.MovieDTO;
import com.mmdb.model.entities.Movie;

public class MovieUtils {

    public static MovieDTO convertEntityToDTO(Movie movie) {
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

    public static Movie convertDTOToEntity(MovieDTO movie) {
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
