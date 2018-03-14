package com.social.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.social.model.json.ImdbRatingDeserializer;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieDTO {
    @JsonProperty("Title")
    private String name;

    @JsonProperty("Year")
    private Integer year;

    @JsonProperty("Plot")
    private String description;

    @JsonProperty("imdbRating")
    @JsonDeserialize(using = ImdbRatingDeserializer.class, as = Double.class)
    private Double imdbRating;

    @JsonProperty("Runtime")
//    @JsonDeserialize(using = ImdbRatingDeserializer.class, as = Integer.class)
    private String length;

    @JsonProperty("Actors")
    private String actors;

    @JsonProperty("Director")
    private String directors;

    @JsonProperty("Country")
    private String country;

    @JsonProperty("Poster")
    private String posterUrl;

    @JsonProperty("Production")
    private String production;

    @JsonProperty("Genre")
    private String genre;
}