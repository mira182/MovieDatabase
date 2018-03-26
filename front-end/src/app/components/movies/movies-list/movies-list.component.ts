import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {IndicatorRotate, SlideInOutAnimation} from "../../animations/animations";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  animations: [SlideInOutAnimation, IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class MoviesListComponent implements OnInit {

  @Output() movieDeleteEvent = new EventEmitter<Movie>();
  @Input() moviesByGenre : Array<Movie>;
  @Input() genresToShow : string[];
  private expanded : boolean;
  animationState = 'out';

  constructor() { }

  ngOnInit() {
  }

  toggleShowDiv(item) {
    this.animationState = this.animationState === 'in' ? 'out' : 'in';
    this.expanded = !this.expanded;
  }

  deleteMovie(movie : Movie) {
    this.movieDeleteEvent.next(movie);
  }
}
