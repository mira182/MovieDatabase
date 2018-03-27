import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {IndicatorRotate, SlideInOutAnimation} from "../../animations/animations";
import {Genres} from "../../../model/genres";
import {MovieUtilsServiceService} from "../../../services/movies/movie-utils-service.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  animations: [SlideInOutAnimation, IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class MoviesListComponent implements OnInit {

  @Output() movieDeleteEvent = new EventEmitter<Movie>();
  @Input() private moviesByGenre = [];
  @Input() movies : Array<Movie>;
  private expanded : boolean;
  animationState = 'out';
  private sortedByName : boolean = true;
  private sortedByImdb : boolean;

  constructor(private movieUtils : MovieUtilsServiceService) { }

  ngOnInit() {
    this.loadMoviesByGenre();
  }

  sortMoviesByName() {
    this.movies.sort((movie1,movie2) => {
      if (movie1.name > movie2.name) {
        return 1;
      }

      if (movie1.name < movie2.name) {
        return -1;
      }
      return 0;
    });
    this.loadMoviesByGenre();
  }

  sortMoviesByImdb() {
    this.movies.sort((movie1,movie2) => {
      if (movie1.imdbRating < movie2.imdbRating) {
        return 1;
      }

      if (movie1.imdbRating > movie2.imdbRating) {
        return -1;
      }
      return 0;
    });
    this.loadMoviesByGenre();
  }

  loadMoviesByGenre() {
    this.moviesByGenre = [];
    for (let genre of Genres.ALL_GENRES) {
      var moviesByGenre = this.movieUtils.filterMoviesByGenre(this.movies, genre);
      if (moviesByGenre.length > 0)
        this.moviesByGenre.push({'genre' : genre, 'movies' : moviesByGenre});
    }
  }

  deleteMovie(movie : Movie) {
    this.movieDeleteEvent.next(movie);
  }
}
