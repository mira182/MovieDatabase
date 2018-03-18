import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AddMovieDialogComponent} from "../../dialogs/add-movie-dialog/add-movie-dialog.component";
import {Observable} from "rxjs/Rx";
import {Movie} from "../../../model/movie";
import {MovieService} from "../../../services/movies/movie.service";
import {MatDialog, MatSidenav} from "@angular/material";
import {SidenavServiceService} from "../../../services/sidenav-service.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IndicatorRotate} from "../../animations/animations";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
  animations: [IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class MoviesPageComponent implements OnInit {

  private moviesToShow : Movie[];
  private newMovie : Movie;
  private omdbTitle : string;
  private omdbMovie : Observable<Movie>;
  @ViewChild('sideNav') movieSideNav: MatSidenav;
  sideNavExpanded : boolean;

  constructor(private movieService: MovieService, public dialog: MatDialog, private sideNavService : SidenavServiceService) {}

  ngOnInit() {
    this.sideNavService.setSideNav(this.movieSideNav);
    this.getAllMovies();
  }

  public getAllMovies() {
    this.movieService.getAllMovies().subscribe(data => {
      this.moviesToShow = data;
      console.log("Received all movies in movies page");
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

  onSideNavClick() {
    this.sideNavExpanded = !this.sideNavExpanded;
  }

}
