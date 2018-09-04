package com.social.model.json;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.mmdb.model.deserializers.ImdbRatingDeserializer;
import com.mmdb.model.dto.outer.omdb.OmdbMovieDTO;
import org.junit.Test;

import java.io.IOException;

public class ImdbRatingDeserializerTest {

    private static final String JSON_OBJECT = "\"{\\\"Title\\\":\\\"Zane Reviews Star Wars Rogue One\\\",\\\"Year\\\":\\\"2017\\\",\\\"Rated\\\":\\\"N/A\\\",\\\"Released\\\":\\\"12 Jan 2017\\\",\\\"Runtime\\\":\\\"4 min\\\",\\\"Genre\\\":\\\"Short\\\",\\\"Director\\\":\\\"N/A\\\",\\\"Writer\\\":\\\"N/A\\\",\\\"Actors\\\":\\\"Zane Alexander\\\",\\\"Plot\\\":\\\"N/A\\\",\\\"Language\\\":\\\"English\\\",\\\"Country\\\":\\\"USA\\\",\\\"Awards\\\":\\\"N/A\\\",\\\"Poster\\\":\\\"https://images-na.ssl-images-amazon.com/images/M/MV5BODQ5NzBiZmYtNjFhMC00OTUxLTgyNDUtODU4ZGU4MmQ2YWU1L2ltYWdlXkEyXkFqcGdeQXVyNzEyNTQ4OTQ@._V1_SX300.jpg\\\",\\\"Ratings\\\":[],\\\"Metascore\\\":\\\"N/A\\\",\\\"imdbRating\\\":\\\"N/A\\\",\\\"imdbVotes\\\":\\\"N/A\\\",\\\"imdbID\\\":\\\"tt6421084\\\",\\\"Type\\\":\\\"movie\\\",\\\"DVD\\\":\\\"N/A\\\",\\\"BoxOffice\\\":\\\"N/A\\\",\\\"Production\\\":\\\"N/A\\\",\\\"Website\\\":\\\"N/A\\\",\\\"Response\\\":\\\"True\\\"}\"";

    @Test
    public void deserializeDates() throws JsonParseException, JsonMappingException, IOException {

        final ObjectMapper mapper = new ObjectMapper();
        SimpleModule simpleModule = new SimpleModule();
        simpleModule.addDeserializer(Object.class, new ImdbRatingDeserializer());
        mapper.registerModule(simpleModule);

        @SuppressWarnings("unchecked")
        OmdbMovieDTO omdbMovieDTO = mapper.readValue(JSON_OBJECT, OmdbMovieDTO.class);

        System.out.println(omdbMovieDTO.getImdbRating());
    }

}