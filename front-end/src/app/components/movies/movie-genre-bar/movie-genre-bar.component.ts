import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";

@Component({
  selector: 'app-movie-genre-bar',
  templateUrl: './movie-genre-bar.component.html',
  styleUrls: ['./movie-genre-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieGenreBarComponent implements OnInit {

  @Output() genresChanged = new EventEmitter<genresMap>();
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

  genresChanged(genre, event) {
    var checked = event.source.checked;
    this.genresMap[genre] = checked;
    if (this.genresToShow.includes(genre)) {
      if (!checked) {
        var index = this.genresToShow.indexOf(genre);
        if (index > -1) {
          this.genresToShow.splice(index, 1);
        }
      }
    } else {
      if (checked) {
        this.genresToShow.push(genre);
      }
    }
    this.genresToShow.sort();
  }

}
