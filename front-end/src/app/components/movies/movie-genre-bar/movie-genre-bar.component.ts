import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";

@Component({
  selector: 'app-movie-genre-bar',
  templateUrl: './movie-genre-bar.component.html',
  styleUrls: ['./movie-genre-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieGenreBarComponent implements OnInit {

  @Output() genresChanged = new EventEmitter<GenreChangedEvent>();
  @Input() private genresToShow : string[] = [];

  private genresMap = {
    "Action": true,
    "Adventure": true,
    "Animation": true,
    "Biography": true,
    "Comedy": true,
    "Crime": true,
    "Documentary": true,
    "Drama": true,
    "Family": true,
    "Fantasy": true,
    "Horror": true,
    "Music": true,
    "Mystery": true,
    "Sci-Fi": true,
    "Sport": true,
    "Thriller": true,
  };

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
