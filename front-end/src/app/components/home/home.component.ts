import {Component, ViewEncapsulation} from '@angular/core';
import {MovieService} from "../../services/movies/movie.service";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material";
import {NgxCarousel} from "ngx-carousel";
import {Movie} from "../../model/movie";
import {TvShow} from "../../model/tvshow";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  private allMovies : Movie[];
  private allTvShows : TvShow[];

  constructor(private movieService: MovieService, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllMovies();

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

  public getAllMovies() {
    this.movieService.getAllMovies().subscribe(data => {
      this.allMovies = data;
      console.log("All movies received in home page component");
    });
  }

  public getAllTvShows() {
    this.movieService.getAllTvShows().subscribe(data => {
      this.allTvShows = data;
      console.log("All tv shows: " + JSON.stringify(data));
    });
  }
}
