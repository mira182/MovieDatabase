package com.mmdb.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.mmdb.model.deserializers.OMDBMovieDeserializer;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class OmdbMoviesDTO extends ArrayList<OmdbMovieDTO> {

    public OmdbMoviesDTO() {
        super();
    }

}