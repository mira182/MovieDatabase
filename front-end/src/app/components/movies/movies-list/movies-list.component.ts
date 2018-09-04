import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MovieService} from "../../../services/movies/movie.service";
import {ChangeEvent, VirtualScrollComponent} from "angular2-virtual-scroll";
import {Item} from "../../../model/item";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesListComponent implements OnInit, OnChanges {

  @Input() movies : Array<Item>;
  scrollItems : Array<Item>;
  @Output() movieDeleteEvent = new EventEmitter<Item>();
  indices: ChangeEvent;
  private buffer: Item[] = [];
  readonly bufferSize: number = 10;
  private loading: boolean;
  timer;

  @ViewChild(VirtualScrollComponent)
  private virtualScroll: VirtualScrollComponent;


  constructor(private movieService : MovieService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.reset();
  }

  reset() {
    this.fetchNextChunk(0, this.bufferSize, {}).then(chunk => this.buffer = chunk);
  }

  deleteMovie(movie : Item) {
    this.movieDeleteEvent.next(movie);
  }

  fetchMore(event: ChangeEvent) {
    this.indices = event;
    if (event.end === this.buffer.length - 1) {
      this.loading = true;
      this.fetchNextChunk(this.buffer.length, this.bufferSize, event).then(chunk => {
        this.buffer = this.buffer.concat(chunk);
        this.loading = false;
      }, () => this.loading = false);
    }
  }

  fetchNextChunk(skip: number, limit: number, event?: any): Promise<Item[]> {
    return new Promise((resolve, reject) => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (skip < this.movies.length) {
          return resolve(this.movies.slice(skip, skip + limit));
        }
        reject();
      }, 1000 + Math.random() * 1000);
    });
  }
}
