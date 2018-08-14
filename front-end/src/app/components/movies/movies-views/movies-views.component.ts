import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ViewType} from "../../../model/viewType";

@Component({
  selector: 'app-movies-views',
  templateUrl: './movies-views.component.html',
  styleUrls: ['./movies-views.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesViewsComponent implements OnInit {

  @Output() changeViewType = new EventEmitter<ViewType>();
  ViewTypes = ViewType;

  constructor() { }

  ngOnInit() {
  }

  setViewType(viewType : ViewType) {
    this.changeViewType.next(viewType);
  }
}
