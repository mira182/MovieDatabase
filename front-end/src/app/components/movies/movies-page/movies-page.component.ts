import {
  Component, OnChanges, OnInit, Pipe, PipeTransform, SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {AddMovieDialogComponent} from "../../dialogs/add-movie-dialog/add-movie-dialog.component";
import {Observable} from "rxjs/Rx";
import {Movie} from "../../../model/movie";
import {MovieService} from "../../../services/movies/movie.service";
import {MatDialog, MatSidenav} from "@angular/material";
import {SidenavService} from "../../../services/sidenav-service.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IndicatorRotate} from "../../animations/animations";
import {Genres} from "../../../model/genres";
import {GetOmdbMovieDialogComponent} from "../../dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component";

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
  private genresToShow : string[] = [];
  private moviesByGenre: { [genre: string] : Array<Movie> } = {};
  public ALL_GENRES = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Horror",
    "Music",
    "Mystery",
    "Sci-Fi",
    "Sport",
    "Thriller",
  ];
  private genresMap = {
    "Action": true,
    "Adventure": true,
    "Animation": true,
    "Biography": true,
    "Comedy": true,
    "Crime": true,
    "Documentary": true,
    "Drama": true,
    "Family": true,
    "Fantasy": true,
    "Horror": true,
    "Music": true,
    "Mystery": true,
    "Sci-Fi": true,
    "Sport": true,
    "Thriller": true,
  };

  constructor(private movieService: MovieService, public dialog: MatDialog, private sideNavService : SidenavService) {}

  ngOnInit() {
    this.sideNavService.setSideNav(this.movieSideNav);
    this.movieService.getAllMovies().subscribe(data => {
      this.allMovies = data;
      this.updateMoviesLists();
    });
  }

  updateMoviesLists() {
    this.genresToShow = [];
    var tmpMoviesByGenre = [];
    for (let genre of this.ALL_GENRES) {
      if (this.genresMap[genre]) {
        this.genresToShow.push(genre);
        tmpMoviesByGenre = this.getMoviesByGenre(genre);
        if (tmpMoviesByGenre.length != 0)
          this.moviesByGenre[genre] = tmpMoviesByGenre;
      }
    }
  }

  getMoviesByGenre(genre : string) {
    return this.allMovies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()));
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
  }

  importMovies() {
    this.movieService.importMovies();
  }

  deleteMovie(movie : Movie) {
    // delete movie from list
    var index = this.allMovies.indexOf(movie);
    if (index > -1) {
      this.allMovies.splice(index, 1);
      this.updateMoviesLists();
    }
    console.log("Deleting event in movies page." + index);
  }

  genresChanged(genre, event) {
    var checked = event.source.checked;
    this.genresMap[genre] = checked;
    if (this.genresToShow.includes(genre)) {
      if (!checked) {
        var index = this.genresToShow.indexOf(genre);
        if (index > -1) {
          this.genresToShow.splice(index, 1);
        }
      }
    } else {
      if (checked) {
        this.genresToShow.push(genre);
      }
    }
    this.genresToShow.sort();
  }
}
