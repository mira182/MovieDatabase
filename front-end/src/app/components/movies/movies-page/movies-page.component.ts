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
  private showAsCarousel : boolean = true;
  private showAsList : boolean;
  private showSpinner : boolean;
  private moviesByGenre = [];

  constructor(private movieService: MovieService, private movieUtils : MovieUtilsServiceService,  public dialog: MatDialog, private sideNavService : SidenavService) {  }

  ngOnInit() {
    this.showSpinner = true;
    this.sideNavService.setSideNav(this.movieSideNav);
    this.movieService.getAllMovies().subscribe(data => {
      this.allMovies = data;
      this.loadMoviesByGenre();
      this.sortAllMoviesByName();
      this.showSpinner = false;
    });
  }

  sortAllMoviesByName() {
    this.allMovies.sort((movie1,movie2) => {
      if (movie1.name > movie2.name) {
        return 1;
      }

      if (movie1.name < movie2.name) {
        return -1;
      }
      return 0;
    });
  }

  loadMoviesByGenre() {
    this.moviesByGenre = [];
    for (let genre of Genres.ALL_GENRES) {
      var moviesByGenre = this.movieUtils.filterMoviesByGenre(this.allMovies, genre);
      if (moviesByGenre.length > 0)
        this.moviesByGenre.push({'genre' : genre, 'movies' : moviesByGenre});
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
    //noinspection TypeScriptUnresolvedFunction
    let dialogRef = this.dialog.open(GetOmdbMovieDialogComponent, {
      height: 'auto',
      width: '500px',
    });
    // TODO reload page after dialog close (new movie added)
  }

  importMovies() {
    this.showSpinner = true;
    this.movieService.importMovies();
    this.showSpinner = false;
    window.location.reload();
  }

  deleteMovie(movie : Movie) {
    // delete movie from list
    var index = this.allMovies.indexOf(movie);
    if (index > -1) {
      this.allMovies.splice(index, 1);
      this.loadMoviesByGenre();
    }
    console.log("Deleting event in movies page." + index);
  }

  updateGenres(event) {
    var checked = event.selected;
    var genre = event.genre;
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
