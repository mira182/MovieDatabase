import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {Movie} from "../../../model/movie";
import {trigger, style, animate, transition, state} from '@angular/animations';
import {IndicatorRotate, SlideInOutAnimation} from "../../animations/animations";

@Component({
  selector: 'app-movie-item',
  animations: [SlideInOutAnimation, IndicatorRotate],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieItemComponent implements OnInit {

  @Input() movie : Movie;
  animationState = 'out';
  expanded = false;

  toggleShowDiv() {
    this.animationState = this.animationState === 'in' ? 'out' : 'in';
    this.expanded = !this.expanded;
  }

  constructor() { }

  ngOnInit() {
  }

}
