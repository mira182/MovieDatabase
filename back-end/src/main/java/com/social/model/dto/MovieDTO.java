package com.social.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
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
    private Double imdbRating;

    @JsonProperty("Runtime")
//    @JsonDeserialize(using = LengthDeserializer.class)
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
}