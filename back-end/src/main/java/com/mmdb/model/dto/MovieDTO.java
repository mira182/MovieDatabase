package com.mmdb.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieDTO {
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
}