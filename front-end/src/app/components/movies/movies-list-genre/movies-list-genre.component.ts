import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {IndicatorRotate, SlideInOutAnimation} from "../../animations/animations";
import {Genres} from "../../../model/genres";
import {MovieUtilsServiceService} from "../../../services/movies/movie-utils-service.service";

@Component({
  selector: 'app-movies-list-genre',
  templateUrl: './movies-list-genre.component.html',
  styleUrls: ['./movies-list-genre.component.css'],
  animations: [SlideInOutAnimation, IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class MoviesListGenreComponent implements OnInit {

  @Output() movieDeleteEvent = new EventEmitter<Movie>();
  @Input() private moviesByGenre = [];
  @Input() movies : Array<Movie>;

  constructor(private movieUtils : MovieUtilsServiceService) { }

  ngOnInit() {
  }

  sortMoviesByName() {
    this.movieUtils.sortMoviesByName(this.movies);
    this.loadMoviesByGenre();
  }

  sortMoviesByImdb() {
    this.movieUtils.sortMoviesByImdb(this.movies);
    this.loadMoviesByGenre();
  }

  loadMoviesByGenre() {
    this.moviesByGenre = [];
    for (let genre of Genres.ALL_GENRES) {
      let moviesByGenre = this.movieUtils.filterMoviesByGenre(this.movies, genre);
      if (moviesByGenre.length > 0)
        this.moviesByGenre.push({'genre' : genre, 'movies' : moviesByGenre});
    }
  }

  deleteMovie(movie : Movie) {
    this.movieDeleteEvent.next(movie);
  }
}