import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgxCarousel} from "ngx-carousel";

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselListComponent<T> implements OnInit {
  @Input() items : Array<T>;

  constructor() {

  }

  ngOnInit() {

  }

}
