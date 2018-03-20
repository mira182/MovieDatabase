package com.mmdb.model.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Setter;

@Data
@Setter(AccessLevel.NONE)
@AllArgsConstructor
public class TvShowDTO {
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
