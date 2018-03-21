package com.mmdb.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.mmdb.model.deserializers.ImdbRatingDeserializer;
import com.mmdb.model.deserializers.LengthDeserializer;
import com.mmdb.model.deserializers.OMDBMovieDeserializer;
import com.mmdb.model.deserializers.PosterDeserializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Lob;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor
@JsonDeserialize(using = OMDBMovieDeserializer.class)
public class OmdbMovieDTO {

    public OmdbMovieDTO() {
    }

    @JsonProperty("Title")
    private String name;

    @JsonProperty("Year")
    private String year;

    @JsonProperty("Plot")
    private String description;

    @JsonProperty("imdbRating")
//    @JsonDeserialize(using = ImdbRatingDeserializer.class, as = Double.class)
    private Double imdbRating;

    @JsonProperty("Runtime")
//    @JsonDeserialize(using = LengthDeserializer.class, as = Integer.class)
    private Integer length;

    @JsonProperty("Actors")
    private String actors;

    @JsonProperty("Director")
    private String directors;

    @JsonProperty("Country")
    private String country;

    @JsonProperty("Poster")
//    @JsonDeserialize(using = PosterDeserializer.class, as = String.class)
    private String posterUrl;

    @JsonProperty("Production")
    private String production;

    @JsonProperty("Genre")
    private String genre;
}