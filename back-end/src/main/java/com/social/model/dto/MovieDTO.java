package com.social.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.social.model.json.ImdbRatingDeserializer;
import com.social.model.json.LengthDeserializer;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieDTO {
    private String name;

    private Integer year;

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