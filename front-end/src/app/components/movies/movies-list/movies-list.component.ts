import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import {MovieService} from "../../../services/movies/movie.service";
import {HttpClient} from "@angular/common/http";
import {MatDialogModule, MatDialogRef, MatDialog} from '@angular/material';
import { AddMovieDialogComponent } from '../../dialogs/add-movie-dialog/add-movie-dialog.component';
import { Movie } from "../../../model/movie";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesListComponent implements OnInit {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  private newMovie : Movie;
  private allMovies : Movie[];
  private omdbTitle : string;
  private omdbMovie : Observable<Movie>;

  constructor(private movieService: MovieService, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    // this.getAllMovies() = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
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
      console.log("All movies: " + JSON.stringify(data));
    });
  }

  openAddMovieDialog() {
    //noinspection TypeScriptUnresolvedFunction
    let dialogRef = this.dialog.open(AddMovieDialogComponent, {
      height: 'auto',
      width: '500px',
      data : {newMovie: this.newMovie}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newMovie = result;
      if (this.newMovie) {
        this.movieService.addMovie(this.newMovie);
      }
    });
  }

  getOmdbTitle() {
    this.omdbMovie = this.movieService.getOmdbMovie(this.omdbTitle);
    this.omdbMovie.subscribe(resp => {
      console.log("Movie details response" + JSON.stringify(resp));
    });
  }

  importMovie() {
    this.movieService.importMovie(this.omdbTitle).subscribe(resp => {
      console.log("Import response" + JSON.stringify(resp));
    });
  }

  importMovies() {
    this.movieService.importMovies();
  }
}
