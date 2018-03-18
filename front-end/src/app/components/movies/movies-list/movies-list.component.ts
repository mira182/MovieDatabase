import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';
import {Movie} from "../../../model/movie";
import {MovieService} from "../../../services/movies/movie.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesListComponent implements OnInit {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  @Input() movies : Movie[];

  constructor(private movieService: MovieService) { }

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

  public carouselItemsLoad(evt: any) {
    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }
  }
}
