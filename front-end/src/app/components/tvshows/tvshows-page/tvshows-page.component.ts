import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AddMovieDialogComponent} from "../../dialogs/add-movie-dialog/add-movie-dialog.component";
import {MatDialog, MatSidenav} from "@angular/material";
import {Movie} from "../../../model/movie";
import {Observable} from "rxjs/Rx";
import {MovieService} from "../../../services/movies/movie.service";
import {SidenavService} from "../../../services/sidenav-service.service";
import {IndicatorRotate} from "../../animations/animations";
import {GetOmdbMovieDialogComponent} from "../../dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component";
import {TvShow} from "../../../model/tvshow";

@Component({
  selector: 'app-tvshows-page',
  templateUrl: './tvshows-page.component.html',
  styleUrls: ['./tvshows-page.component.css'],
  animations: [IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class TvshowsPageComponent implements OnInit {

  private newTvShow : TvShow;
  @ViewChild('sideNav') tvShowSideNav: MatSidenav;
  sideNavExpanded : boolean;

  constructor(private movieService: MovieService, public dialog: MatDialog, private sideNavService : SidenavService) { }

  ngOnInit() {
    this.sideNavService.setSideNav(this.tvShowSideNav);
  }

  // openAddMovieDialog() {
  //   //noinspection TypeScriptUnresolvedFunction
  //   let dialogRef = this.dialog.open(AddMovieDialogComponent, {
  //     height: 'auto',
  //     width: '500px',
  //     data : {newMovie: this.newTvShow}
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.newTvShow = result;
  //     if (this.newTvShow) {
  //       this.movieService.addTvShow(this.newTvShow);
  //     }
  //   });
  // }

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
