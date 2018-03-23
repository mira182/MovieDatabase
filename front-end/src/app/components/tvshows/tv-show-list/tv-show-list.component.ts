import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TvShow} from "../../../model/tvshow";
import {NgxCarousel} from "ngx-carousel";
import {Movie} from "../../../model/movie";

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TvShowListComponent implements OnInit {

  public carouselTile: NgxCarousel;
  @Input() tvShows : Array<TvShow>
  @Output() tvShowDeleteEvent = new EventEmitter<TvShow>();

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

  deleteTvShow(tvShow : TvShow) {
    this.tvShowDeleteEvent.next(tvShow);
  }

}
