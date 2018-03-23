package com.mmdb.services.tvshows;

import com.mmdb.dao.TvShowRepository;
import com.mmdb.model.dto.TvShowDTO;
import com.mmdb.model.dto.builders.TvShowDTOBuilder;
import com.mmdb.model.entities.TvShow;
import com.mmdb.services.movies.MoviesServiceImpl;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TvShowsServiceImpl implements TvShowsService {

    private static final Logger logger = LogManager.getLogger(TvShowsServiceImpl.class);

    @Autowired
    private TvShowRepository tvShowRepository;

    @Override
    public List<TvShowDTO> getAllTvShows() {
        final List<TvShowDTO> tvShows = new ArrayList<>();
        tvShowRepository.findAll().forEach((TvShow tvShowEntity) -> {
            tvShows.add(new TvShowDTOBuilder()
                    .setId(tvShowEntity.getId())
                    .setName(tvShowEntity.getName())
                    .setActors(tvShowEntity.getActors())
                    .setCountry(tvShowEntity.getCountry())
                    .setDescription(tvShowEntity.getDescription())
                    .setDirectors(tvShowEntity.getDirectors())
                    .setGenre(tvShowEntity.getGenre())
                    .setImdbRating(tvShowEntity.getImdbRating())
                    .setLength(tvShowEntity.getLength())
                    .setPosterUrl(tvShowEntity.getPosterUrl())
                    .setProduction(tvShowEntity.getProduction())
                    .setYear(tvShowEntity.getYear())
                    .createTvShowDTO());
        });
        return tvShows;
    }

    @Override
    public TvShow saveMovie(TvShowDTO movieDto) {
        return null;
    }

    @Override
    public List<TvShowDTO> getMoviesByGenre(String genre) {
        return null;
    }

    @Override
    public void deleteTvShow(Long id) {
        logger.debug("Deleting tv show with ID: {} from database.", id);
        tvShowRepository.delete(id);
    }
}
