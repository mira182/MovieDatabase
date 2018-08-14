import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TokenStorage} from "../../services/auth/token.storage";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {SidenavService} from "../../services/sidenav-service.service";
import {MovieService} from "../../services/movies/movie.service";
import {FormControl} from "@angular/forms";
import {Movie} from "../../model/movie";
import {TvShowsService} from "../../services/tvshows/tvshows.service";
import {TvShow} from "../../model/tvshow";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {

  searchTerm : FormControl = new FormControl();
  searchResult = [];

  constructor(private token: TokenStorage,
              private router: Router,
              private authService: AuthService,
              private sideNavService : SidenavService,
              private movieService : MovieService,
              private tvShowsService : TvShowsService) { }

  ngOnInit() {
    this.searchTerm.valueChanges
      .debounceTime(400)
      .subscribe(searchString => {
        this.movieService.getAllMovies().subscribe((movies: Array<Movie>) => { // get all movies
          this.tvShowsService.getAllTvShows().subscribe((tvShows: Array<TvShow>) => { // get all tv shows
            const foundMovies = movies.filter((movie, index, movies) => { // is is a movie?
              if (movie.name.toLocaleLowerCase().includes(searchString)) {
                return true;
              }
            });

            const foundTvShows = tvShows.filter((tvShow, index, tvShows) => { // is is a tv show?
              if (tvShow.name.toLocaleLowerCase().includes(searchString)) {
                return true;
              }
            });

            this.searchResult = [];
            for (let movie of foundMovies) {
              this.searchResult.push(movie);
            }
            for (let tvShow of foundTvShows) {
              this.searchResult.push(tvShow);
            }
          });
        });
      })
  }

  logOut() {
    this.token.signOut();
    this.authService.setLoggedIn(false);
  }

  toggleSideNav() {
    this.sideNavService.toggleSideNav();
  }

  showDetails(item : Movie) {
    this.router.navigateByUrl('movies/' + item.id);
  }

}
