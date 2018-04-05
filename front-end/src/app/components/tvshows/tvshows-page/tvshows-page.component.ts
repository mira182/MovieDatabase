import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatSidenav} from "@angular/material";
import {SidenavService} from "../../../services/sidenav-service.service";
import {IndicatorRotate} from "../../animations/animations";
import {GetOmdbMovieDialogComponent} from "../../dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component";
import {TvShow} from "../../../model/tvshow";
import {TvShowsService} from "../../../services/tvshows/tvshows.service";
import {MovieUtilsServiceService} from "../../../services/movies/movie-utils-service.service";
import {MovieService} from "../../../services/movies/movie.service";
import {Movie} from "../../../model/movie";
import {AddMovieDialogComponent} from "../../dialogs/add-movie-dialog/add-movie-dialog.component";
import {Genres} from "../../../model/genres";
import {HttpEvent, HttpEventType} from "@angular/common/http";
import {MessageSnackbarService} from "../../../services/error/error-snackbar-service.service";

@Component({
  selector: 'app-tvshows-page',
  templateUrl: './tvshows-page.component.html',
  styleUrls: ['./tvshows-page.component.css'],
  animations: [IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class TvshowsPageComponent implements OnInit {

  private allTvShows = new Array<Movie>();
  private newTvShow : TvShow;
  @ViewChild('sideNav') movieSideNav: MatSidenav;
  private omdbMenuExpanded : boolean;
  private moviesMenuExpanded : boolean;
  private showAsCarousel : boolean = true;
  private showAsList : boolean;
  private showSpinner : boolean;
  private tvShowsByGenre = [];

  constructor(private tvShowsService: TvShowsService,
              private movieUtils : MovieUtilsServiceService,
              public dialog: MatDialog,
              private sideNavService : SidenavService,
              private errorSnackBarService : MessageSnackbarService) {  }

  ngOnInit() {
    this.showSpinner = true;
    this.sideNavService.setSideNav(this.movieSideNav);
    this.tvShowsService.getAllTvShows().subscribe(data => {
      this.allTvShows = data;
      this.loadMoviesByGenre();
      this.sortAllMoviesByName();
      this.showSpinner = false;
    });
  }

  sortAllMoviesByName() {
    this.allTvShows.sort((movie1,movie2) => {
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
    this.tvShowsByGenre = [];
    for (let genre of Genres.ALL_GENRES) {
      let tvShowsByGenre = this.movieUtils.filterMoviesByGenre(this.allTvShows, genre);
      if (tvShowsByGenre.length > 0) {
        tvShowsByGenre.sort();
        this.tvShowsByGenre.push({'genre' : genre, 'movies' : tvShowsByGenre});
      }
    }
  }

  openAddMovieDialog() {
    //noinspection TypeScriptUnresolvedFunction
    let dialogRef = this.dialog.open(AddMovieDialogComponent, {
      height: 'auto',
      width: '500px',
      data : {newMovie: this.newTvShow}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newTvShow = result;
      if (this.newTvShow) {
        this.tvShowsService.addTvShow(this.newTvShow);
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

  importTvShows() {
    this.tvShowsService.importTvShows().subscribe((event : HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          this.showSpinner = true;
          break;
        case HttpEventType.Response:
          this.showSpinner = false;
          window.location.reload();
          break;
      }}, error => {
      this.showSpinner = false;
      this.errorSnackBarService.openMessageSnackBar(error.message);
    });
  }

  deleteMovie(tvShow : TvShow) {
    // delete movie from list
    var index = this.allTvShows.indexOf(tvShow);
    if (index > -1) {
      this.allTvShows.splice(index, 1);
      this.loadMoviesByGenre();
    }
    console.log("Deleting event in movies page." + index);
  }

  updateGenres(event) {
    var checked = event.selected;
    var genre = event.genre;
    if (!checked) { // uncheck genre
      this.getMoviesByGenre(genre).movies = [];
    } else if (checked) { // check genre
      this.getMoviesByGenre(genre).movies = this.movieUtils.filterMoviesByGenre(this.allTvShows, genre);
    }
  }

  getMoviesByGenre(genre) {
    return this.tvShowsByGenre.find((item, index) => {
      if (item.genre == genre) {
        return true;
      }
    });
  }
}
