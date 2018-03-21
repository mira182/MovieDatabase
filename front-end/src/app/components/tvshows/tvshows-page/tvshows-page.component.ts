import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AddMovieDialogComponent} from "../../dialogs/add-movie-dialog/add-movie-dialog.component";
import {MatDialog, MatSidenav} from "@angular/material";
import {Movie} from "../../../model/movie";
import {Observable} from "rxjs/Rx";
import {MovieService} from "../../../services/movies/movie.service";
import {SidenavService} from "../../../services/sidenav-service.service";
import {IndicatorRotate} from "../../animations/animations";
import {GetOmdbMovieDialogComponent} from "../../dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component";

@Component({
  selector: 'app-tvshows-page',
  templateUrl: './tvshows-page.component.html',
  styleUrls: ['./tvshows-page.component.css'],
  animations: [IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class TvshowsPageComponent implements OnInit {

  private newMovie : Movie;
  private omdbTitle : string;
  private omdbMovie : Observable<Movie>;
  @ViewChild('sideNav') tvShowSideNav: MatSidenav;
  sideNavExpanded : boolean;

  constructor(private movieService: MovieService, public dialog: MatDialog, private sideNavService : SidenavService) { }

  ngOnInit() {
    this.sideNavService.setSideNav(this.tvShowSideNav);
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

  openGetOmdbTvShowDialog() {
    //noinspection TypeScriptUnresolvedFunction
    let dialogRef = this.dialog.open(GetOmdbMovieDialogComponent, {
      height: 'auto',
      width: '500px',
    });
  }

  onSideNavClick() {
    this.sideNavExpanded = !this.sideNavExpanded;
  }
}
