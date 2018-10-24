package com.mmdb.model.dto.internal;

import com.mmdb.model.entities.Movie;
import lombok.*;

import java.util.List;

@Data
@Setter(AccessLevel.NONE)
@AllArgsConstructor
@Builder
public class MovieDTO {
    private Long id;
    private String name;
    private String year;
    private String description;
    private Double imdbRating;
    private Integer length;
    private List<String> actors;
    private String directors;
    private String country;
    private String posterUrl;
    private String production;
    private String genre;
}