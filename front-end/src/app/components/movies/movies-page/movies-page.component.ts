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
import {HttpEvent, HttpEventType} from "@angular/common/http";
import {OmdbService} from "../../../services/omdb/omdb-service.service";
import {MessageSnackbarService} from "../../../services/error/error-snackbar-service.service";
import {Observable} from "rxjs/Rx";
import {MoviesToImportDialogComponent} from "../../dialogs/movies-to-import-dialog/movies-to-import-dialog.component";
import {ViewType} from "../../../model/viewType";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
  animations: [IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class MoviesPageComponent implements OnInit {

  private allMovies = new Array<Movie>();
  private newMovie : Movie;
  @ViewChild('sideNav') movieSideNav: MatSidenav;
  private omdbMenuExpanded : boolean;
  private moviesMenuExpanded : boolean;
  private showSpinner : boolean;
  private showProgress : boolean;
  private moviesByGenre = [];
  private importingProgress = 0;
  private importTitles : string;
  private viewType = ViewType.GridView;

  constructor(private movieService: MovieService,
              private movieUtils : MovieUtilsServiceService,
              public dialog: MatDialog,
              private sideNavService : SidenavService,
              private omdbService : OmdbService,
              private messageSnackBarService : MessageSnackbarService) {  }

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

  // TODO create pipe for sorting
  loadMoviesByGenre() {
    this.moviesByGenre = [];
    for (let genre of Genres.ALL_GENRES) {
      const moviesByGenre = this.movieUtils.filterMoviesByGenre(this.allMovies, genre);
      if (moviesByGenre.length > 0) {
        this.movieUtils.sortMoviesByName(moviesByGenre);
        this.moviesByGenre.push({'genre' : genre, 'movies' : moviesByGenre});
      }
    }
  }

  openAddMovieDialog() {
    //noinspection TypeScriptUnresolvedFunction
    let dialogRef = this.dialog.open(AddMovieDialogComponent, {
      height: 'auto',
      width: '500px',
      data : {newMovie: this.newMovie, title: 'Add Movie'}
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

  openImportMoviesDialog() {
    //noinspection TypeScriptUnresolvedFunction
    let dialogRef = this.dialog.open(MoviesToImportDialogComponent, {
      height: 'auto',
      width: '500px',
      data : {titles: this.importTitles}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.importTitles = result;
      if (this.importTitles) {
        this.importMoviesFrontEnd(this.importTitles);
      }
    });
  }

  importMovies() {
    this.movieService.importMovies().subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          this.showSpinner = true;
          break;
        case HttpEventType.Response:
          this.showSpinner = false;
          window.location.reload();
          break;
      }
    },(error) => {
      this.showSpinner = false;
    });
  }

  importMoviesFrontEnd(titles : string) {
    let failedMovies = [];
    let omdbMovieList = titles.split(',').map((title, index) => {
      return this.omdbService.getOmdbMovie(title.trim())
        .map(movie => movie as Movie)
        .catch((error: any) => {
          console.error('Error loading movies from OMDB: ' + title, 'Error: ', error);
          this.importingProgress++;
          failedMovies.push(title);
          return Observable.of(null); // In case error occurs, we need to return Observable, so the stream can continue
        });
    });

    Observable.forkJoin(omdbMovieList).subscribe(omdbMovies => {
      // remove null values
      let movies = omdbMovies.filter(movie => movie != null);
      this.omdbService.storeOmdbMovies(movies).subscribe(event => {
        if (event.type === HttpEventType.Sent) {
          this.showProgress = true;
        }
        if (event.type === HttpEventType.Response) {
          this.showProgress = false;
          this.messageSnackBarService.openMessageSnackBar('All movies were imported.');
          // window.location.reload();
        }
      }, error => {
        this.showProgress = false;
        this.messageSnackBarService.openMessageSnackBar(error.message);
      });
    }, error => {
      this.messageSnackBarService.openMessageSnackBar(error.message);
    }, () => {
      console.log('something is done');
    });
  }

  deleteMovie(movie : Movie) {
    // delete movie from list
    const index = this.allMovies.indexOf(movie);
    if (index > -1) {
      this.allMovies.splice(index, 1);
      this.loadMoviesByGenre();
    }
    console.log("Deleting movie " + movie.name);
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

  selectViewType($event) {
    this.viewType = $event;
  }
}
