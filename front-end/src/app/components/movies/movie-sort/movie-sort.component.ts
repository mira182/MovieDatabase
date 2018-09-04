import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {MovieUtilsServiceService} from "../../../services/movies/movie-utils-service.service";

@Component({
  selector: 'app-movie-sort',
  templateUrl: './movie-sort.component.html',
  styleUrls: ['./movie-sort.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieSortComponent implements OnInit {

  @Input() private movies = new Array<Movie>();
  @Input() private canBeSorted : boolean;
  @Output() moviesSorted = new EventEmitter<boolean>();

  constructor(private movieUtilsService : MovieUtilsServiceService) { }

  ngOnInit() {
  }

  sortMoviesByName() {
    this.movieUtilsService.sortMoviesByName(this.movies);
    this.moviesSorted.next(true);
  }

  sortMoviesByImdb() {
    this.movieUtilsService.sortMoviesByImdb(this.movies);
    this.moviesSorted.next(true);
  }

}
