import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import {MovieService} from "../../services/movie.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesListComponent implements OnInit {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  constructor(private movieService: MovieService, private http: HttpClient) { }

  ngOnInit() {
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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
    return this.movieService.getAllMovies();
  }
}
