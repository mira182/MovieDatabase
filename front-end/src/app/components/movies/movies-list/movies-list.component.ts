import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {MovieService} from "../../../services/movies/movie.service";
import {MovieUtilsServiceService} from "../../../services/movies/movie-utils-service.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesListComponent implements OnInit {

  @Input() movies : Array<Movie>;
  @Output() movieDeleteEvent = new EventEmitter<Movie>();

  constructor(private movieUtilsService : MovieUtilsServiceService) { }

  ngOnInit() {
  }

  sortMoviesByName() {
    this.movieUtilsService.sortMoviesByName(this.movies);
  }

  sortMoviesByImdb() {
    this.movieUtilsService.sortMoviesByImdb(this.movies);
  }

  deleteMovie(movie : Movie) {
    this.movieDeleteEvent.next(movie);
  }

}
