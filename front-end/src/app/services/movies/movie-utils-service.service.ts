import { Injectable } from '@angular/core';
import {Movie} from "../../model/movie";

@Injectable()
export class MovieUtilsServiceService {

  public filterMoviesByGenre(movies : Array<Movie>, genre : string) {
    return movies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()));
  }

  public sortMoviesByName(movies : Array<Movie>) {
    movies.sort((movie1,movie2) => {
      if (movie1.name > movie2.name) {
        return 1;
      }

      if (movie1.name < movie2.name) {
        return -1;
      }
      return 0;
    });
  }

  public sortMoviesByImdb(movies : Array<Movie>) {
    movies.sort((movie1,movie2) => {
      if (movie1.imdbRating < movie2.imdbRating) {
        return 1;
      }

      if (movie1.imdbRating > movie2.imdbRating) {
        return -1;
      }
      return 0;
    });
  }
}
