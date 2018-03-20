package com.mmdb.services.tvshows;


import com.mmdb.model.dto.TvShowDTO;
import com.mmdb.model.entities.TvShow;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TvShowsService {

    List<TvShowDTO> getAllTvShows();

    TvShow saveMovie(TvShowDTO movieDto);

    List<TvShowDTO> getMoviesByGenre(String genre);

}
