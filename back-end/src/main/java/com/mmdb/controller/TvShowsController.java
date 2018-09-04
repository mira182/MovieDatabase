package com.mmdb.controller;

import com.mmdb.model.dto.internal.TvShowDTO;
import com.mmdb.services.tvshows.TvShowsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(method = RequestMethod.DELETE, params = "id")
    public void deleteTvShow(Long id) {
        tvShowsService.deleteTvShow(id);
    }

    @GetMapping(value="/{id}")
    public TvShowDTO getTvShow(@PathVariable Long id) {
        return tvShowsService.getTvShow(id);
    }
}
