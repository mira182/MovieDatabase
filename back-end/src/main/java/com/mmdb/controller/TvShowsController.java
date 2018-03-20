package com.mmdb.controller;

import com.mmdb.model.dto.TvShowDTO;
import com.mmdb.services.tvshows.TvShowsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TvShowsController {

    @Autowired
    private TvShowsService tvShowsService;

    public List<TvShowDTO> getAllTvShows() {
        return tvShowsService.getAllTvShows();
    }
}
