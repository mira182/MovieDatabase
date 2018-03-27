import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Genres} from "../../../model/genres";

@Component({
  selector: 'app-movie-genre-bar',
  templateUrl: './movie-genre-bar.component.html',
  styleUrls: ['./movie-genre-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieGenreBarComponent implements OnInit {

  @Output() genresChanged = new EventEmitter<GenreChangedEvent>();
  @Input() private moviesByGenre = [];
  private allGenres = Genres.ALL_GENRES;

  constructor() { }

  ngOnInit() {
  }

  updateGenres(genre, event) {
    this.genresChanged.next(new GenreChangedEvent(genre, event.source.checked));
  }
}

export class GenreChangedEvent {
  constructor(genre: string, selected: boolean) {
    this.genre = genre;
    this.selected = selected;
  }

  genre : string;
  selected : boolean;
}
