package com.social.controller;

import com.social.controller.error.ApiErrorResponse;
import com.social.model.dto.MovieDTO;
import com.social.model.dto.OmdbMovieDTO;
import com.social.model.entities.Movie;
import com.social.services.movies.MoviesServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/movies")
public class MoviesController {

    @Autowired
    private MoviesServiceImpl moviesServiceImpl;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Movie> getAllMovies() {
        return moviesServiceImpl.getAllMovies();
    }

    @PostMapping
    public Movie saveMovie(@RequestBody MovieDTO movieDTO) {
        return moviesServiceImpl.saveMovie(movieDTO);
    }

//    @ExceptionHandler(Exception.class)
//    @ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "File or folder is unwrittable")
//    public @ResponseBody String handleException(HttpServletRequest request, Exception exception) {
//        return exception.getMessage();
//    }

//    @ExceptionHandler(ExpiredJwtException.class)
//    public final ResponseEntity<ApiErrorResponse> handleAllExceptions(Exception ex, WebRequest request) {
//        return new ResponseEntity<>("pica", HttpStatus.UNAUTHORIZED);
//    }
}
