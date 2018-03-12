package com.social.model.dto;

import lombok.Data;

@Data
public class OmdbMovieDTO extends MovieDTO {
    private String actors;
    private String directors;
}