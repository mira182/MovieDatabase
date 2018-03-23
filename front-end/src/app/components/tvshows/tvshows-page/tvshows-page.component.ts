import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatSidenav} from "@angular/material";
import {SidenavService} from "../../../services/sidenav-service.service";
import {IndicatorRotate} from "../../animations/animations";
import {GetOmdbMovieDialogComponent} from "../../dialogs/get-omdb-movie-dialog/get-omdb-movie-dialog.component";
import {TvShow} from "../../../model/tvshow";
import {TvShowsService} from "../../../services/tvshows/tvshows.service";

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
  private allTvShows : Array<TvShow>;
  private omdbMenuExpanded : boolean;
  private tvShowsMenuExpanded : boolean;
  private genresToShow : string[] = [];
  private showSpinner : boolean;
  private tvShowsByGenre: { [genre: string] : Array<TvShow> } = {};
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

  constructor(private tvShowsService: TvShowsService, public dialog: MatDialog, private sideNavService : SidenavService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.sideNavService.setSideNav(this.tvShowSideNav);
    this.tvShowsService.getAllTvShows().subscribe(data => {
      this.allTvShows = data;
      this.updateTvShowsLists();
      this.showSpinner = false;
    });
  }

  updateTvShowsLists() {
    this.genresToShow = [];
    var tmpMoviesByGenre = [];
    for (let genre of this.ALL_GENRES) {
      if (this.genresMap[genre]) {
        this.genresToShow.push(genre);
        tmpMoviesByGenre = this.getTvShowsByGenre(genre);
        if (tmpMoviesByGenre.length != 0)
          this.tvShowsByGenre[genre] = tmpMoviesByGenre;
      }
    }
  }

  getTvShowsByGenre(genre : string) {
    return this.allTvShows.filter(tvShow => tvShow.genre.toLowerCase().includes(genre.toLowerCase()));
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

  importTvShows() {
    this.showSpinner = true;
    this.tvShowsService.importTvShows().subscribe();
    this.showSpinner = false;
    window.location.reload();
  }

  deleteTvShow(tvShow : TvShow) {
    // delete tv show from list
    var index = this.allTvShows.indexOf(tvShow);
    if (index > -1) {
      this.allTvShows.splice(index, 1);
      this.updateTvShowsLists();
    }
    console.log("Deleting event in tv shows page." + index);
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
