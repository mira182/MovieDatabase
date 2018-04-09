import {Component, Input, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../../model/movie";

@Component({
  selector: 'app-hbo-view-item',
  templateUrl: './hbo-view-item.component.html',
  styleUrls: ['./hbo-view-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HboViewItemComponent implements OnInit {

  @Input() movie : Movie;

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
  }

  mouseenter (event) {
    this.renderer2.addClass(event.target, 'mat-elevation-z12')
  }

  mouseleave (event) {
    this.renderer2.removeClass(event.target, 'mat-elevation-z12')
  }

}
