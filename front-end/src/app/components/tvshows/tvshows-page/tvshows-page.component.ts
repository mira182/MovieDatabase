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

@Component({
  selector: 'app-tvshows-page',
  templateUrl: './tvshows-page.component.html',
  styleUrls: ['./tvshows-page.component.css'],
  animations: [IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class TvshowsPageComponent implements OnInit {

  private allTvShows : Array<TvShow>;
  private newTvShow : TvShow;
  @ViewChild('sideNav') movieSideNav: MatSidenav;
  private omdbMenuExpanded : boolean;
  private moviesMenuExpanded : boolean;
  private showAsCarousel : boolean = true;
  private showAsList : boolean;
  private showSpinner : boolean;
  private moviesByGenre = [];

  constructor(private tvShowsService: TvShowsService, private movieUtils : MovieUtilsServiceService,  public dialog: MatDialog, private sideNavService : SidenavService) {  }

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
    this.moviesByGenre = [];
    for (let genre of Genres.ALL_GENRES) {
      var moviesByGenre = this.movieUtils.filterMoviesByGenre(this.allTvShows, genre);
      if (moviesByGenre.length > 0)
        this.moviesByGenre.push({'genre' : genre, 'movies' : moviesByGenre});
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
    this.showSpinner = true;
    this.tvShowsService.importTvShows();
    this.showSpinner = false;
    window.location.reload();
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
    if (!checked) { // delete genre
      this.getMoviesByGenre(genre).movies = [];
    } else if (checked) { // add genre
      this.getMoviesByGenre(genre).movies = this.movieUtils.filterMoviesByGenre(this.allTvShows, genre);
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
