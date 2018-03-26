import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AddMovieDialogComponent} from "../../dialogs/add-movie-dialog/add-movie-dialog.component";
import {Movie} from "../../../model/movie";
import {MovieService} from "../../../services/movies/movie.service";
import {MatDialog, MatSidenav} from "@angular/material";
import {SidenavService} from "../../../services/sidenav-service.service";
import {IndicatorRotate} from "../../animations/animations";
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
  private omdbMenuExpanded : boolean;
  private moviesMenuExpanded : boolean;
  private showAsCarousel : boolean = true;
  private showAsList : boolean;
  private showSpinner : boolean;
  // moviesByGenre = new Map<string, Array<Movie>>();
  private moviesByGenre = [];
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


  constructor(private movieService: MovieService, public dialog: MatDialog, private sideNavService : SidenavService) {  }

  ngOnInit() {
    this.showSpinner = true;
    this.sideNavService.setSideNav(this.movieSideNav);
    this.movieService.getAllMovies().subscribe(data => {
      this.allMovies = data;
      for (let genre of this.ALL_GENRES) {
        // this.moviesByGenre.set(genre, this.filterMoviesByGenre(genre));
        this.moviesByGenre.push({'genre' : genre, 'movies' : this.filterMoviesByGenre(genre)});
      }
      this.sortByName();
      this.showSpinner = false;
    });
  }

  sortByName() {
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

  updateMoviesLists() {
    for (let genre of this.ALL_GENRES) {
      if (this.getMoviesByGenre(genre)['movies']) {
        this.moviesByGenre['movies'] = this.filterMoviesByGenre(genre);
      }
    }
  }

  filterMoviesByGenre(genre : string) {
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
      this.updateMoviesLists();
    }
    console.log("Deleting event in movies page." + index);
  }

  updateGenres(genre, event) {
    var checked = event.source.checked;

      if (!checked) { // delete genre
        this.getMoviesByGenre(genre).movies = [];
      } else if (checked) { // add genre
        this.getMoviesByGenre(genre).movies = this.filterMoviesByGenre(genre);
      }
    // this.moviesByGenre[genre].sort();
  }

  getMoviesByGenre(genre) {
    return this.moviesByGenre.find((item, index) => {
      if (item.genre == genre) {
        return true;
      }
    });
    // .filter((item, index, array) => {
    //   if (item.genre == genre) {
    //     return item;
    //   }
    // });
  }
}
