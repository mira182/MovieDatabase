package com.social.model.json;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.social.model.dto.OmdbMovieDTO;
import org.junit.Test;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Collections;

import static com.social.services.importing.OmdbMoviesDataImporter.MOVIE_TITLE_SEARCH_URL;


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

    @Test
    public void deserializeOmdbJson() throws IOException {
        final RestTemplate restTemplate = new RestTemplate();

        final HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        final HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        final ResponseEntity<String> result = restTemplate.exchange(String.format(MOVIE_TITLE_SEARCH_URL, "Zane Reviews Star Wars Rogue One"),
                HttpMethod.GET, entity, String.class);

        final ObjectMapper mapper = new ObjectMapper();
        SimpleModule simpleModule = new SimpleModule();
        simpleModule.addDeserializer(Object.class, new ImdbRatingDeserializer());
        mapper.registerModule(simpleModule);

        @SuppressWarnings("unchecked")
        OmdbMovieDTO omdbMovieDTO = mapper.readValue(result.getBody(), OmdbMovieDTO.class);

        System.out.println(omdbMovieDTO.getImdbRating());
    }

}