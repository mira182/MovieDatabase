package com.social.services.importing;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.social.dao.MovieRepository;
import com.social.model.dto.OmdbMovieDTO;
import com.social.model.entities.Movie;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class OmdbMoviesDataImporter implements MovieDataImporter {

    private static final String MOVIE_TITLE_SEARCH_URL = "http://www.omdbapi.com/?t=%s&apikey=BanMePls";

    @Autowired
    private MovieRepository movieRepository;

    public static void getEmployees(List<String> titles) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        for (String title : titles) {
            ResponseEntity<String> result = restTemplate.exchange(String.format(MOVIE_TITLE_SEARCH_URL, title), HttpMethod.GET, entity, String.class);
            JSONObject jsonObject = new JSONObject(result.getBody());
            System.out.println(jsonObject.getString("Title"));
        }
    }

    @Override
    public OmdbMovieDTO getMovieData(String title) {
        final RestTemplate restTemplate = new RestTemplate();

        final HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        final HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        final ResponseEntity<String> result = restTemplate.exchange(String.format(MOVIE_TITLE_SEARCH_URL, title),
                HttpMethod.GET, entity, String.class);

        final ObjectMapper mapper = new ObjectMapper();
        OmdbMovieDTO omdbMovieDTO = null;
        try {
            omdbMovieDTO = mapper.readValue(result.getBody(), OmdbMovieDTO.class);
        } catch (IOException e) {
            System.err.println(e);
        }

        return omdbMovieDTO;
    }

    @Override
    public List<OmdbMovieDTO> getMovieData(List<String> titles) {
        List<OmdbMovieDTO> omdbMovieList = new ArrayList<>();
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        for (String title : titles) {
            ResponseEntity<String> result = restTemplate.exchange(String.format(MOVIE_TITLE_SEARCH_URL, title),
                    HttpMethod.GET, entity, String.class);
            final ObjectMapper mapper = new ObjectMapper();
            try {
                OmdbMovieDTO omdbMovieDTO = mapper.readValue(result.getBody(), OmdbMovieDTO.class);
                omdbMovieList.add(omdbMovieDTO);
            } catch (IOException e) {
                System.err.println(e);
            }
        }

        return omdbMovieList;
    }

    @Override
    public void importMovieData(String title) {
        final OmdbMovieDTO omdbMovieDTO = getMovieData(title);
        final Movie movie = movieRepository.findByName(title);
        movie.setName(omdbMovieDTO.getName());
        movie.setYear(omdbMovieDTO.getYear());
        movie.setActors(omdbMovieDTO.getActors());
        movie.setDescription(omdbMovieDTO.getDescription());
        movie.setDirectors(omdbMovieDTO.getDirectors());
        movie.setImdbRating(omdbMovieDTO.getImdbRating());
        movie.setLength(omdbMovieDTO.getLength());
        movieRepository.save(movie);
    }

    @Override
    public void importMoviesData(List<String> titles) {
        for (OmdbMovieDTO omdbMovieDTO : getMovieData(titles)) {
            final Movie movie = movieRepository.findByName(omdbMovieDTO.getName());
            movie.setName(omdbMovieDTO.getName());
            movie.setYear(omdbMovieDTO.getYear());
            movie.setActors(omdbMovieDTO.getActors());
            movie.setDescription(omdbMovieDTO.getDescription());
            movie.setDirectors(omdbMovieDTO.getDirectors());
            movie.setImdbRating(omdbMovieDTO.getImdbRating());
            movie.setLength(omdbMovieDTO.getLength());
            movieRepository.save(movie);
        }
    }
}
