package com.mmdb.model.dto.builders;

import com.mmdb.model.dto.MovieDTO;

public class MovieDTOBuilder {
    private Long id;
    private String name;
    private String year;
    private String description;
    private Double imdbRating;
    private Integer length;
    private String actors;
    private String directors;
    private String country;
    private String posterUrl;
    private String production;
    private String genre;

    public MovieDTOBuilder setId(Long id) {
        this.id = id;
        return this;
    }

    public MovieDTOBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public MovieDTOBuilder setYear(String year) {
        this.year = year;
        return this;
    }

    public MovieDTOBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public MovieDTOBuilder setImdbRating(Double imdbRating) {
        this.imdbRating = imdbRating;
        return this;
    }

    public MovieDTOBuilder setLength(Integer length) {
        this.length = length;
        return this;
    }

    public MovieDTOBuilder setActors(String actors) {
        this.actors = actors;
        return this;
    }

    public MovieDTOBuilder setDirectors(String directors) {
        this.directors = directors;
        return this;
    }

    public MovieDTOBuilder setCountry(String country) {
        this.country = country;
        return this;
    }

    public MovieDTOBuilder setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
        return this;
    }

    public MovieDTOBuilder setProduction(String production) {
        this.production = production;
        return this;
    }

    public MovieDTOBuilder setGenre(String genre) {
        this.genre = genre;
        return this;
    }

    public MovieDTO createMovieDTO() {
        return new MovieDTO(id, name, year, description, imdbRating, length, actors, directors, country, posterUrl, production, genre);
    }
}