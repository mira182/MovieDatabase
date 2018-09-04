package com.mmdb.services.tvshows;

import com.mmdb.dao.TvShowRepository;
import com.mmdb.model.dto.internal.TvShowDTO;
import com.mmdb.model.entities.TvShow;
import com.mmdb.util.TvShowUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TvShowsServiceImpl implements TvShowsService {

    private static final Logger logger = LogManager.getLogger(TvShowsServiceImpl.class);

    @Autowired
    private TvShowRepository tvShowRepository;

    @Override
    public List<TvShowDTO> getAllTvShows() {
        return tvShowRepository.findAll()
                .stream()
                .map(tvShow -> TvShowUtils.convertEntityToDTO(tvShow))
                .collect(Collectors.toList());
    }

    @Override
    public TvShowDTO getTvShow(Long id) {
        final TvShow foundTvShow = tvShowRepository.getOne(id);
        return TvShowUtils.convertEntityToDTO(foundTvShow);
    }

    @Override
    public TvShow saveMovie(TvShowDTO movieDto) {
        return null;
    }

    @Override
    public void deleteTvShow(Long id) {
        logger.debug("Deleting tv show with ID: {} from database.", id);
        tvShowRepository.delete(id);
    }
}
