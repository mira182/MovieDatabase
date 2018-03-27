import { Injectable } from '@angular/core';
import {Movie} from "../../model/movie";

@Injectable()
export class MovieUtilsServiceService {

  public filterMoviesByGenre(movies : Array<Movie>, genre : string) {
    return movies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()));
  }
}
