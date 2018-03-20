package com.mmdb.services.tvshows;

import com.mmdb.dao.TvShowRepository;
import com.mmdb.model.dto.MovieDTO;
import com.mmdb.model.dto.TvShowDTO;
import com.mmdb.model.dto.builders.MovieDTOBuilder;
import com.mmdb.model.dto.builders.TvShowDTOBuilder;
import com.mmdb.model.entities.Movie;
import com.mmdb.model.entities.TvShow;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class TvShowsServiceImpl implements TvShowsService {

    @Autowired
    private TvShowRepository tvShowRepository;

    @Override
    public List<TvShowDTO> getAllTvShows() {
        final List<TvShowDTO> tvShows = new ArrayList<>();
        tvShowRepository.findAll().forEach((TvShow tvShowEntity) -> {
            tvShows.add(new TvShowDTOBuilder()
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
}
