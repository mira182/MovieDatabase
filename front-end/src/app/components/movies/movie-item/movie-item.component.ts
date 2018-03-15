import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {Movie} from "../../../model/movie";
import {trigger, style, animate, transition, state} from '@angular/animations';
import {SlideInOutAnimation} from "../../animations/animations";

@Component({
  selector: 'app-movie-item',
  animations: [SlideInOutAnimation],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieItemComponent implements OnInit {

  @Input() movie : Movie;
  animationState = 'out';

  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      this.animationState = this.animationState === 'in' ? 'out' : 'in';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
