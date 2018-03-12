package com.social.services.importing;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.social.dao.MovieRepository;
import com.social.model.dto.MovieDTO;
import com.social.model.entities.Movie;
import com.social.util.ImageDownloader;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

// TODO prettyfi
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
    public MovieDTO getMovieData(String title) {
        final RestTemplate restTemplate = new RestTemplate();

        final HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        final HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        final ResponseEntity<String> result = restTemplate.exchange(String.format(MOVIE_TITLE_SEARCH_URL, title),
                HttpMethod.GET, entity, String.class);

        final ObjectMapper mapper = new ObjectMapper();
//        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        MovieDTO omdbMovieDTO = null;
        try {
            omdbMovieDTO = mapper.readValue(result.getBody(), MovieDTO.class);
        } catch (IOException e) {
            System.err.println(e);
        }

        System.out.println(omdbMovieDTO);
        return omdbMovieDTO;
    }

    @Override
    public List<MovieDTO> getMovieData(List<String> titles) {
        List<MovieDTO> omdbMovieList = new ArrayList<>();
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        for (String title : titles) {
            ResponseEntity<String> result = restTemplate.exchange(String.format(MOVIE_TITLE_SEARCH_URL, title),
                    HttpMethod.GET, entity, String.class);
            final ObjectMapper mapper = new ObjectMapper();
            try {
                MovieDTO omdbMovieDTO = mapper.readValue(result.getBody(), MovieDTO.class);
                omdbMovieList.add(omdbMovieDTO);
            } catch (IOException e) {
                System.err.println(e);
            }
        }

        return omdbMovieList;
    }

    @Override
    public void importMovieData(String title) {
        final MovieDTO omdbMovieDTO = getMovieData(title);
        movieRepository.save(convertDTOtoEntity(omdbMovieDTO));
    }

    @Override
    public void importMoviesData(List<String> titles) {
        for (MovieDTO omdbMovieDTO : getMovieData(titles)) {
            movieRepository.save(convertDTOtoEntity(omdbMovieDTO));
        }
    }

    private Movie convertDTOtoEntity(MovieDTO omdbMovieDTO) {
        final Movie movie = new Movie();
        movie.setName(omdbMovieDTO.getName());
        movie.setCountry(omdbMovieDTO.getCountry());
        movie.setProduction(omdbMovieDTO.getProduction());
        movie.setYear(omdbMovieDTO.getYear());
        movie.setActors(omdbMovieDTO.getActors());
        movie.setDescription(omdbMovieDTO.getDescription());
        movie.setDirectors(omdbMovieDTO.getDirectors());
        movie.setImdbRating(omdbMovieDTO.getImdbRating());
        movie.setPosterUrl(omdbMovieDTO.getPosterUrl());
        movie.setLength(Integer.parseInt(omdbMovieDTO.getLength().replace("min", "").trim()));
        try {
            movie.setPoster(ImageDownloader.downloadImage(omdbMovieDTO.getPosterUrl()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return movie;
    }
}
