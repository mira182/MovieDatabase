package com.mmdb.services.importing;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.mmdb.dao.MovieRepository;
import com.mmdb.dao.TvShowRepository;
import com.mmdb.model.deserializers.OMDBMovieDeserializer;
import com.mmdb.model.dto.OmdbMovieDTO;
import com.mmdb.model.entities.Movie;
import com.mmdb.model.entities.TvShow;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

@Service
public class OmdbMoviesDataImporter implements MovieDataImporter {

    private static final Logger logger = LogManager.getLogger(OmdbMoviesDataImporter.class);

    private static final String MOVIE_TITLE_SEARCH_URL = "http://www.omdbapi.com/?t=%s&apikey=3534d3d7";
    private static final String TVSHOWS_TITLE_SEARCH_URL = "http://www.omdbapi.com/?t=%s&type=series&apikey=3534d3d7";

    private final MovieRepository movieRepository;

    private final TvShowRepository tvShowRepository;

    @Autowired
    public OmdbMoviesDataImporter(MovieRepository movieRepository, TvShowRepository tvShowRepository) {
        this.movieRepository = movieRepository;
        this.tvShowRepository = tvShowRepository;
    }

    private OmdbMovieDTO getMovieData(String title) throws IOException {
        // get json movie data
        final RestTemplate restTemplate = new RestTemplate();
        final HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        final HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        final ResponseEntity<String> result = restTemplate.exchange(String.format(MOVIE_TITLE_SEARCH_URL, title),
                HttpMethod.GET, entity, String.class);

        logger.debug("Requested: {}, Result: code={}, body={}", title, result.getStatusCode(), result.getBody());
        if (result.getBody().contains("Movie not found!")) {
            throw new IOException();
        }

        // deserialize json
        final ObjectMapper mapper = new ObjectMapper();
        SimpleModule mod = new SimpleModule();
        mod.addDeserializer(OmdbMovieDTO.class, new OMDBMovieDeserializer(OmdbMovieDTO.class));
        mapper.registerModule(mod);
        final OmdbMovieDTO omdbOmdbMovieDTO = mapper.readValue(result.getBody(), OmdbMovieDTO.class);
        logger.debug("Deserialized OMDB movie: {}", omdbOmdbMovieDTO);

        return omdbOmdbMovieDTO;
    }

    private OmdbMovieDTO getTvShowData(String title) throws IOException {
        // get json tv show data
        final RestTemplate restTemplate = new RestTemplate();
        final HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        final HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        final ResponseEntity<String> result = restTemplate.exchange(String.format(TVSHOWS_TITLE_SEARCH_URL, title),
                HttpMethod.GET, entity, String.class);

        logger.debug("Requested: {}, Result: code={}, body={}", title, result.getStatusCode(), result.getBody());
        if (result.getBody().contains("Series not found!")) {
            throw new IOException();
        }

        // deserialize json
        final ObjectMapper mapper = new ObjectMapper();
        SimpleModule mod = new SimpleModule();
        mod.addDeserializer(OmdbMovieDTO.class, new OMDBMovieDeserializer(OmdbMovieDTO.class));
        mapper.registerModule(mod);
        final OmdbMovieDTO omdbOmdbMovieDTO = mapper.readValue(result.getBody(), OmdbMovieDTO.class);
        logger.debug("Deserialized OMDB TV show: {}", omdbOmdbMovieDTO);

        return omdbOmdbMovieDTO;
    }

    @Override
    public void importMoviesData(String titles) {
        for (String title : stringTitlesToList(titles)) {
            OmdbMovieDTO omdbOmdbMovieDTO;
            try {
                omdbOmdbMovieDTO = getMovieData(title);
            } catch (IOException e) {
                logger.error("Failed to get data from OMDB about movie {}", title, e);
                continue;
            }
            movieRepository.save(convertDTOtoEntity(omdbOmdbMovieDTO));
        }
    }

    @Override
    public boolean storeOmdbMovie(OmdbMovieDTO omdbMovieDTO) {
        logger.debug("Storing OMDB movie: {}", omdbMovieDTO);
        final Movie storedMovie = movieRepository.save(convertDTOtoEntity(omdbMovieDTO));
        return storedMovie != null;
    }

    @Override
    public void importTvShowsData(String tvShowsTitles) {
        for (String title : stringTitlesToList(tvShowsTitles)) {
            OmdbMovieDTO omdbOmdbMovieDTO;
            try {
                omdbOmdbMovieDTO = getTvShowData(title);
            } catch (IOException e) {
                logger.error("Failed to get data from OMDB about tv show {}", title, e);
                continue;
            }
            tvShowRepository.save(convertTvShowDTOtoEntity(omdbOmdbMovieDTO));
        }
    }

    private List<String> stringTitlesToList(String titles) {
        final List<String> titlesList = new ArrayList<>();
        Scanner scanner = new Scanner(titles);
        scanner.useDelimiter(",");
        while (scanner.hasNext()) {
            titlesList.add(scanner.next());
        }
        scanner.close();
        return titlesList;
    }

    private Movie convertDTOtoEntity(OmdbMovieDTO omdbOmdbMovieDTO) {
        final Movie movie = new Movie();
        movie.setName(omdbOmdbMovieDTO.getName());
        movie.setCountry(omdbOmdbMovieDTO.getCountry());
        movie.setProduction(omdbOmdbMovieDTO.getProduction());
        movie.setYear(omdbOmdbMovieDTO.getYear());
        movie.setActors(omdbOmdbMovieDTO.getActors());
        movie.setDescription(omdbOmdbMovieDTO.getDescription());
        movie.setDirectors(omdbOmdbMovieDTO.getDirectors());
        movie.setImdbRating(omdbOmdbMovieDTO.getImdbRating());
        movie.setPosterUrl(omdbOmdbMovieDTO.getPosterUrl());
        movie.setGenre(omdbOmdbMovieDTO.getGenre());
        movie.setLength(omdbOmdbMovieDTO.getLength());
//        try {
//            movie.setPoster(ImageDownloader.downloadImage(omdbOmdbMovieDTO.getPosterUrl()));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        return movie;
    }

    private TvShow convertTvShowDTOtoEntity(OmdbMovieDTO omdbOmdbMovieDTO) {
        final TvShow movie = new TvShow();
        movie.setName(omdbOmdbMovieDTO.getName());
        movie.setCountry(omdbOmdbMovieDTO.getCountry());
        movie.setProduction(omdbOmdbMovieDTO.getProduction());
        movie.setYear(omdbOmdbMovieDTO.getYear());
        movie.setActors(omdbOmdbMovieDTO.getActors());
        movie.setDescription(omdbOmdbMovieDTO.getDescription());
        movie.setDirectors(omdbOmdbMovieDTO.getDirectors());
        movie.setImdbRating(omdbOmdbMovieDTO.getImdbRating());
        movie.setPosterUrl(omdbOmdbMovieDTO.getPosterUrl());
        movie.setGenre(omdbOmdbMovieDTO.getGenre());
        movie.setLength(omdbOmdbMovieDTO.getLength());
//        try {
//            movie.setPoster(ImageDownloader.downloadImage(omdbOmdbMovieDTO.getPosterUrl()));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        return movie;
    }

}
