import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';
import {Movie} from "../../../model/movie";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesListComponent implements OnInit {

  public carouselTile: NgxCarousel;
  @Input() movies : Array<Movie>;
  @Output() movieDeleteEvent = new EventEmitter<Movie>();

  constructor() {
  }

  ngOnInit() {
    //noinspection TypeScriptValidateTypes
    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 4, lg: 6, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true,
      },
      load: 2,
      touch: true,
      loop : true,
      easing: 'ease-in'
    }
  }

  deleteMovie(movie : Movie) {
    this.movieDeleteEvent.next(movie);
  }
}
