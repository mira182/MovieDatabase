import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {NgxCarousel} from "ngx-carousel";

@Component({
  selector: 'app-hbo-view',
  templateUrl: './hbo-view.component.html',
  styleUrls: ['./hbo-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HboViewComponent implements OnInit {

  public carouselTile: NgxCarousel;
  @Input() private genre : string;
  @Input() movies : Array<Movie>;

  constructor() { }

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

}
