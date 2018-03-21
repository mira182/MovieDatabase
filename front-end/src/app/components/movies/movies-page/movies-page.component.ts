import {Component, OnInit, Pipe, PipeTransform, ViewChild, ViewEncapsulation} from '@angular/core';
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

  private allMovies : Movie[];
  private newMovie : Movie;
  private omdbTitle : string;
  private omdbMovie : Observable<Movie>;
  @ViewChild('sideNav') movieSideNav: MatSidenav;
  private omdbMenuExpanded : boolean;
  private moviesMenuExpanded : boolean;
  private genresToShow : string[] = [];
  private moviesByGenre: { [genre: string] : Movie[] } = {};


  constructor(private movieService: MovieService, public dialog: MatDialog, private sideNavService : SidenavService) {}

  ngOnInit() {
    this.sideNavService.setSideNav(this.movieSideNav);
    this.movieService.getAllMovies().subscribe(data => {
      var tmpMoviesByGenre = [];
      this.allMovies = data;
      for (let genre in Genres) {
        if (isNaN(Number(genre))) {
          this.genresToShow.push(genre);
          tmpMoviesByGenre = this.getMoviesByGenre(genre);
          if (tmpMoviesByGenre.length != 0)
            this.moviesByGenre[genre] = tmpMoviesByGenre;
        }
      }
    });
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
}
