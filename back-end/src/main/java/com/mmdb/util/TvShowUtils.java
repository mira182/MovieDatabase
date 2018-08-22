package com.mmdb.util;

import com.mmdb.model.dto.TvShowDTO;
import com.mmdb.model.entities.TvShow;

public class TvShowUtils {

    public static TvShowDTO convertEntityToDTO(TvShow tvShowEntity) {
        return TvShowDTO.builder()
                .id(tvShowEntity.getId())
                .name(tvShowEntity.getName())
                .actors(tvShowEntity.getActors())
                .country(tvShowEntity.getCountry())
                .description(tvShowEntity.getDescription())
                .directors(tvShowEntity.getDirectors())
                .genre(tvShowEntity.getGenre())
                .imdbRating(tvShowEntity.getImdbRating())
                .length(tvShowEntity.getLength())
                .posterUrl(tvShowEntity.getPosterUrl())
                .production(tvShowEntity.getProduction())
                .year(tvShowEntity.getYear())
                .build();
    }
}
