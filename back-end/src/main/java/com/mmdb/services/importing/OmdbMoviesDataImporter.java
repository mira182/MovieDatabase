package com.mmdb.services.importing;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.mmdb.dao.MovieRepository;
import com.mmdb.dao.TvShowRepository;
import com.mmdb.model.deserializers.OMDBMovieDeserializer;
import com.mmdb.model.deserializers.OMDBTvShowDeserializer;
import com.mmdb.model.dto.OmdbMovieDTO;
import com.mmdb.model.dto.OmdbMoviesDTO;
import com.mmdb.model.dto.OmdbTvShowDTO;
import com.mmdb.model.entities.Movie;
import com.mmdb.model.entities.TvShow;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.UnknownHttpStatusCodeException;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.net.URLDecoder;
import java.util.*;

@Service
public class OmdbMoviesDataImporter implements MovieDataImporter {

    private static final Logger logger = LogManager.getLogger(OmdbMoviesDataImporter.class);

    private static final String OMDB_API_KEY = "3534d3d7";
    private static final String MOVIE_TITLE_SEARCH_URL = "http://www.omdbapi.com/";
//    private static final String TVSHOWS_TITLE_SEARCH_URL = "http://www.omdbapi.com/?t=%s&type=series&apikey=3534d3d7";

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

        final Map<String, String> params = new HashMap<>();
        params.put("t", title);
        params.put("apikey", OMDB_API_KEY);

        final UriComponentsBuilder builder = UriComponentsBuilder
                .fromUriString(MOVIE_TITLE_SEARCH_URL)
                .queryParam("t", title.trim())
                .queryParam("type", "movie")
                .queryParam("apikey", OMDB_API_KEY);

        String url = URLDecoder.decode(builder.toUriString(), "UTF-8");
        logger.error("URL: " + url);

        ResponseEntity<String> result;
        try {
            result = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        } catch (UnknownHttpStatusCodeException e) {
            throw new IOException(e);
        }
        logger.debug("Requested: {}, Result: code={}, body={}", title, result.getStatusCode(), result.getBody());
        if (result.getBody().contains("Movie not found!")) {
            throw new IOException("Movie not found!");
        }

        // deserialize json
        final ObjectMapper mapper = new ObjectMapper();
        SimpleModule mod = new SimpleModule();
        mod.addDeserializer(OmdbMovieDTO.class, new OMDBMovieDeserializer());
        mapper.registerModule(mod);
        final OmdbMovieDTO omdbOmdbMovieDTO = mapper.readValue(result.getBody(), OmdbMovieDTO.class);
        logger.debug("Deserialized OMDB movie: {}", omdbOmdbMovieDTO);

        return omdbOmdbMovieDTO;
    }

    private OmdbTvShowDTO getTvShowData(String title) throws IOException {
        // get json tv show data

        final RestTemplate restTemplate = new RestTemplate();

        final HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        final HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        final UriComponentsBuilder builder = UriComponentsBuilder
                .fromUriString(MOVIE_TITLE_SEARCH_URL)
                .queryParam("t", title.trim())
                .queryParam("type", "series")
                .queryParam("apikey", OMDB_API_KEY);

        String url = URLDecoder.decode(builder.toUriString(), "UTF-8");
        logger.error("URL: " + url);
        ResponseEntity<String> result;
        try {
                result = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        } catch (UnknownHttpStatusCodeException e) {
            throw new IOException(e);
        }

        logger.debug("Requested: {}, Result: code={}, body={}", title, result.getStatusCode(), result.getBody());
        if (result.getBody().contains("Series not found!")) {
            throw new IOException("Movie not found!");
        }

        // deserialize json
        final ObjectMapper mapper = new ObjectMapper();
        SimpleModule mod = new SimpleModule();
        mod.addDeserializer(OmdbTvShowDTO.class, new OMDBTvShowDeserializer(OmdbTvShowDTO.class));
        mapper.registerModule(mod);
        final OmdbTvShowDTO omdbOmdbMovieDTO = mapper.readValue(result.getBody(), OmdbTvShowDTO.class);
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

            try {
                movieRepository.save(convertDTOtoEntity(omdbOmdbMovieDTO));
            } catch (DataIntegrityViolationException e) {
                logger.error("Movie {} already exists.", title, e);
            }
        }
    }

    @Override
    public boolean storeOmdbMovie(OmdbMovieDTO omdbMovieDTO) {
        logger.debug("Storing OMDB Movie: {}", omdbMovieDTO);
        // TODO return type refactor
        if (omdbMovieDTO.getName() == null) return false;
        final Movie storedMovie = movieRepository.save(convertDTOtoEntity(omdbMovieDTO));
        return storedMovie != null;
    }

    @Override
    public boolean storeOmdbTvShow(OmdbTvShowDTO omdbTvShowDTO) {
        logger.debug("Storing OMDB Tv Show: {}", omdbTvShowDTO);
        final TvShow storedMovie = tvShowRepository.save(convertTvShowDTOtoEntity(omdbTvShowDTO));
        return storedMovie != null;
    }

    @Override
    public boolean storeOmdbMovies(List<OmdbMovieDTO> omdbMoviesDTO) {
        logger.debug("String OMDB movies: {}", omdbMoviesDTO);
        for (OmdbMovieDTO omdbMovieDTO : omdbMoviesDTO) {
            if (omdbMovieDTO.getName() == null) continue;
            try {
                movieRepository.save(convertDTOtoEntity(omdbMovieDTO));
            } catch (DataIntegrityViolationException e) {
                logger.error("Failed to store movie {} because it is already in DB.", omdbMovieDTO.getName());
            }
        }
        return true;
    }

    @Override
    public void importTvShowsData(String tvShowsTitles) {
        for (String title : stringTitlesToList(tvShowsTitles)) {
            OmdbTvShowDTO omdbTvShowDTO;
            try {
                omdbTvShowDTO = getTvShowData(title);
            } catch (IOException e) {
                logger.error("Failed to get data from OMDB about tv show {}", title, e);
                continue;
            }

            try {
                tvShowRepository.save(convertTvShowDTOtoEntity(omdbTvShowDTO));
            } catch (DataIntegrityViolationException e) {
                logger.error("Movie {} already exists.", title, e);
            }

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

    private Movie convertDTOtoEntity(OmdbMovieDTO omdbMovieDTO) {
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
        movie.setGenre(omdbMovieDTO.getGenre());
        movie.setLength(omdbMovieDTO.getLength());
//        try {
//            movie.setPoster(ImageDownloader.downloadImage(omdbOmdbMovieDTO.getPosterUrl()));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        return movie;
    }

    private TvShow convertTvShowDTOtoEntity(OmdbTvShowDTO omdbTvShowDTO) {
        final TvShow tvShow = new TvShow();
        tvShow.setName(omdbTvShowDTO.getName());
        tvShow.setCountry(omdbTvShowDTO.getCountry());
        tvShow.setProduction(omdbTvShowDTO.getProduction());
        tvShow.setYear(omdbTvShowDTO.getYear());
        tvShow.setActors(omdbTvShowDTO.getActors());
        tvShow.setDescription(omdbTvShowDTO.getDescription());
        tvShow.setDirectors(omdbTvShowDTO.getDirectors());
        tvShow.setImdbRating(omdbTvShowDTO.getImdbRating());
        tvShow.setPosterUrl(omdbTvShowDTO.getPosterUrl());
        tvShow.setGenre(omdbTvShowDTO.getGenre());
        tvShow.setLength(omdbTvShowDTO.getLength());
//        try {
//            movie.setPoster(ImageDownloader.downloadImage(omdbOmdbMovieDTO.getPosterUrl()));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        return tvShow;
    }

}
