import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AddMovieDialogComponent} from "../../dialogs/add-movie-dialog/add-movie-dialog.component";
import {Movie} from "../../../model/movie";
import {MovieService} from "../../../services/movies/movie.service";
import {MatDialog, MatSidenav} from "@angular/material";
import {SidenavService} from "../../../services/sidenav-service.service";
import {IndicatorRotate} from "../../animations/animations";
import {GetOmdbMovieDialogComponent} from "../../dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component";
import {Genres} from "../../../model/genres";
import {MovieUtilsServiceService} from "../../../services/movies/movie-utils-service.service";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
  animations: [IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class MoviesPageComponent implements OnInit {

  private allMovies : Array<Movie>;
  private newMovie : Movie;
  @ViewChild('sideNav') movieSideNav: MatSidenav;
  private omdbMenuExpanded : boolean;
  private moviesMenuExpanded : boolean;
  private showSpinner : boolean;
  private moviesByGenre = [];
  value = '';

  constructor(private movieService: MovieService,
              private movieUtils : MovieUtilsServiceService,
              public dialog: MatDialog,
              private sideNavService : SidenavService) {  }

  ngOnInit() {
    this.showSpinner = true;
    this.sideNavService.setSideNav(this.movieSideNav);
    this.movieService.getAllMovies().subscribe(data => {
      this.allMovies = data;
      this.loadMoviesByGenre();
      this.movieUtils.sortMoviesByName(this.allMovies);
      this.showSpinner = false;
    });
  }


  loadMoviesByGenre() {
    this.moviesByGenre = [];
    for (let genre of Genres.ALL_GENRES) {
      const moviesByGenre = this.movieUtils.filterMoviesByGenre(this.allMovies, genre);
      if (moviesByGenre.length > 0) {
        moviesByGenre.sort();
        this.moviesByGenre.push({'genre' : genre, 'movies' : moviesByGenre});
      }

    }
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

  openGetOmdbMovieDialog() {
    this.dialog.open(GetOmdbMovieDialogComponent, {
      height: 'auto',
      width: '500px',
    });
  }

  importMovies() {
    this.showSpinner = true;
    this.movieService.importMovies();
    this.showSpinner = false;
    window.location.reload();
  }

  deleteMovie(movie : Movie) {
    // delete movie from list
    const index = this.allMovies.indexOf(movie);
    if (index > -1) {
      this.allMovies.splice(index, 1);
      this.loadMoviesByGenre();
    }
    console.log("Deleting event in movies page." + index);
  }

  updateGenres(event) {
    const checked = event.selected;
    const genre = event.genre;
    if (!checked) { // delete genre
        this.getMoviesByGenre(genre).movies = [];
      } else if (checked) { // add genre
        this.getMoviesByGenre(genre).movies = this.movieUtils.filterMoviesByGenre(this.allMovies, genre);
      }
  }

  getMoviesByGenre(genre) {
    return this.moviesByGenre.find((item, index) => {
      if (item.genre == genre) {
        return true;
      }
    });
  }
}
