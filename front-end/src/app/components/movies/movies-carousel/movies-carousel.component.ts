import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';
import {Movie} from "../../../model/movie";

@Component({
  selector: 'app-movies-carousel',
  templateUrl: './movies-carousel.component.html',
  styleUrls: ['./movies-carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesCarouselComponent implements OnInit {

  public carouselTile: NgxCarousel;
  @Input() private genre : string;
  @Input() movies : Array<Movie>;
  @Output() movieDeleteEvent = new EventEmitter<Movie>();

  constructor() {
  }

  ngOnInit() {
    //noinspection TypeScriptValidateTypes
    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 4, lg: 5, all: 0},
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
