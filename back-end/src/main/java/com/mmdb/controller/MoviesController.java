package com.mmdb.controller;

import com.mmdb.model.dto.internal.MovieDTO;
import com.mmdb.model.entities.Movie;
import com.mmdb.services.movies.MoviesServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/movies", produces = MediaType.APPLICATION_JSON_VALUE)
public class MoviesController {

    @Autowired
    private MoviesServiceImpl moviesServiceImpl;

    @GetMapping
    public List<MovieDTO> getAllMovies() {
        return moviesServiceImpl.getAllMovies();
    }

    @GetMapping(value="/{id}")
    public MovieDTO getMovie(@PathVariable Long id) {
        return moviesServiceImpl.getMovie(id);
    }

    @RequestMapping(params = { "page", "size" }, method = RequestMethod.GET)
    public Page<MovieDTO> getPaginatedMovies(@RequestParam("page") int page, @RequestParam("size") int size) {
        Page<MovieDTO> resultPage = moviesServiceImpl.getPaginatedMovies(page, size);
//        if (page > resultPage.getTotalPages()) {
//            throw new MyResourceNotFoundException();
//        }
        return resultPage;
    }

    @PostMapping
    public Movie saveMovie(@RequestBody MovieDTO movieDTO) {
        return moviesServiceImpl.saveMovie(movieDTO);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(method = RequestMethod.DELETE, params = "id")
    public void deleteMovie(Long id) {
        moviesServiceImpl.deleteMovie(id);
    }
}
