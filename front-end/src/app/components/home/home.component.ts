import {Component, ViewEncapsulation} from '@angular/core';
import {MovieService} from "../../services/movies/movie.service";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material";
import {NgxCarousel} from "ngx-carousel";
import {Movie} from "../../model/movie";
import {TvShow} from "../../model/tvshow";
import {TvShowsService} from "../../services/tvshows/tvshows.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  private allMovies : Array<Movie>;
  private allTvShows : TvShow[];

  constructor(private movieService: MovieService, private tvShowsService : TvShowsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe((allMovies) => {
      this.allMovies = allMovies;
    });
    this.getAllTvShows();

    //noinspection TypeScriptValidateTypes
    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

  public carouselTileLoad(evt: any) {
    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }
  }

  public getAllTvShows() {
    this.tvShowsService.getAllTvShows().subscribe(data => {
      this.allTvShows = data;
      console.log("All TV shows received in home page component");
    });
  }
}
