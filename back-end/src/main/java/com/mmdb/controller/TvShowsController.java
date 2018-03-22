package com.mmdb.controller;

import com.mmdb.model.dto.TvShowDTO;
import com.mmdb.services.tvshows.TvShowsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/tvshows", produces = MediaType.APPLICATION_JSON_VALUE)
public class TvShowsController {

    @Autowired
    private TvShowsService tvShowsService;

    @GetMapping
    public List<TvShowDTO> getAllTvShows() {
        return tvShowsService.getAllTvShows();
    }
}
