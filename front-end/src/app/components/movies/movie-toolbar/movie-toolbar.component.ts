import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ViewType} from "../../../model/viewType";
import {GenreChangedEvent} from "../movie-genre-bar/movie-genre-bar.component";
import {Movie} from "../../../model/movie";

@Component({
  selector: 'app-movie-toolbar',
  templateUrl: './movie-toolbar.component.html',
  styleUrls: ['./movie-toolbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieToolbarComponent implements OnInit {

  @Input()
  private movies = new Array<Movie>();
  @Input()
  private moviesByGenre = [];
  @Output()
  private changeViewType = new EventEmitter<ViewType>();
  @Output()
  private genresChanged = new EventEmitter<GenreChangedEvent>();
  private canBeSorted : boolean;

  constructor() { }

  ngOnInit() {
  }

  selectViewType(event : ViewType) {
    switch (event) {
      case ViewType.CategoryView:
      case ViewType.GridView:
        this.canBeSorted = false;
        break;
      case ViewType.CategoryListView:
      case ViewType.ListView:
        this.canBeSorted = true;
        break;
    }
    this.changeViewType.next(event);
  }

  updateGenres(event) {
    this.genresChanged.next(event);
  }

}
