import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {PageEvent} from "@angular/material";
import {MovieService} from "../../../services/movies/movie.service";
import {log} from "util";
import {Page} from "../../../model/page";

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridViewComponent implements OnInit {

  private page : Page;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPaginatedMovies(0, 50).subscribe(page => {
      this.page = page;
    });
  }

  getPaginatedMovies(pageEvent : PageEvent) {
    this.movieService.getPaginatedMovies(pageEvent.pageIndex, pageEvent.pageSize).subscribe(page => {
      this.page = page;
    });
  }
}
