package com.mmdb.services.tvshows;


import com.mmdb.model.dto.internal.TvShowDTO;
import com.mmdb.model.entities.TvShow;

import java.util.List;

public interface TvShowsService {

    List<TvShowDTO> getAllTvShows();

    TvShowDTO getTvShow(Long id);

    TvShow saveMovie(TvShowDTO movieDto);

    void deleteTvShow(Long id);
}
