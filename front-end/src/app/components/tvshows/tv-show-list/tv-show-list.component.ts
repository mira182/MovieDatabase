import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TvShow} from "../../../model/tvshow";
import {NgxCarousel} from "ngx-carousel";

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TvShowListComponent implements OnInit {

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  @Input() tvShows : TvShow[];

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

  public carouselItemsLoad(evt: any) {
    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }
  }

}
