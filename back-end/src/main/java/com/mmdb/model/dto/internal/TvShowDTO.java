package com.mmdb.model.dto.internal;

import com.mmdb.model.entities.TvShow;
import lombok.*;

@Data
@Setter(AccessLevel.NONE)
@AllArgsConstructor
@Builder
public class TvShowDTO {
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
}
