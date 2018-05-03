import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {MovieService} from "../../../services/movies/movie.service";
import {MovieUtilsServiceService} from "../../../services/movies/movie-utils-service.service";
import {ChangeEvent} from "angular2-virtual-scroll";
import {Item} from "../../../model/item";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesListComponent implements OnInit {

  @Input() movies : Array<Item>;
  @Output() movieDeleteEvent = new EventEmitter<Item>();
  buffer: Movie[] = [];
  private loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  deleteMovie(movie : Item) {
    this.movieDeleteEvent.next(movie);
  }

  onListChange(event: ChangeEvent) {
    if (event.end !== this.buffer.length) return;
    this.loading = true;
    this.fetchNextChunk(this.buffer.length, 10).then(chunk => {
      console.log(chunk);
      this.buffer = this.buffer.concat(chunk);
      this.loading = false;
    }, () => this.loading = false);
  }

  fetchNextChunk(skip: number, limit: number): Promise<Item[]> {
    return new Promise((resolve, reject) => {
      return this.movies.slice(skip, limit);
    });
  }

}
