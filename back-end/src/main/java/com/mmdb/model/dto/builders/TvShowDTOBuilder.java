package com.mmdb.model.dto.builders;

import com.mmdb.model.dto.TvShowDTO;

public class TvShowDTOBuilder {
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

    public TvShowDTOBuilder setId(Long id) {
        this.id = id;
        return this;
    }

    public TvShowDTOBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public TvShowDTOBuilder setYear(String year) {
        this.year = year;
        return this;
    }

    public TvShowDTOBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public TvShowDTOBuilder setImdbRating(Double imdbRating) {
        this.imdbRating = imdbRating;
        return this;
    }

    public TvShowDTOBuilder setLength(Integer length) {
        this.length = length;
        return this;
    }

    public TvShowDTOBuilder setActors(String actors) {
        this.actors = actors;
        return this;
    }

    public TvShowDTOBuilder setDirectors(String directors) {
        this.directors = directors;
        return this;
    }

    public TvShowDTOBuilder setCountry(String country) {
        this.country = country;
        return this;
    }

    public TvShowDTOBuilder setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
        return this;
    }

    public TvShowDTOBuilder setProduction(String production) {
        this.production = production;
        return this;
    }

    public TvShowDTOBuilder setGenre(String genre) {
        this.genre = genre;
        return this;
    }

    public TvShowDTO createTvShowDTO() {
        return new TvShowDTO(id, name, year, description, imdbRating, length, actors, directors, country, posterUrl, production, genre);
    }
}