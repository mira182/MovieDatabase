package com.social.model.dto;

import lombok.Data;

@Data
public class MovieDTO {
    private String name;
    private Integer year;
    private String description;
    private Integer imdbRating;
    private Integer length;
}
