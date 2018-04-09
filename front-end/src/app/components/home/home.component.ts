import {Component, ViewEncapsulation} from '@angular/core';
import {MovieService} from "../../services/movies/movie.service";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material";
import {NgxCarousel} from "ngx-carousel";
import {Movie} from "../../model/movie";
import {TvShow} from "../../model/tvshow";
import {TvShowsService} from "../../services/tvshows/tvshows.service";
import {IndicatorRotate} from "../animations/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent {
  private allMovies = new Array<Movie>();
  private allTvShows = new Array<TvShow>();

  constructor(private movieService: MovieService, private tvShowsService : TvShowsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe((allMovies) => {
      this.allMovies = allMovies;
    });

    this.tvShowsService.getAllTvShows().subscribe(data => {
      this.allTvShows = data;
    });
  }
}
