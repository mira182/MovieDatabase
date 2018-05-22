import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../../model/movie";
import {IndicatorRotate, SlideInOutAnimation} from "../../../animations/animations";
import {MovieService} from "../../../../services/movies/movie.service";
import {MessageSnackbarService} from "../../../../services/error/error-snackbar-service.service";
import {Item} from "../../../../model/item";
import {Router} from "@angular/router";
import {TvShowsService} from "../../../../services/tvshows/tvshows.service";

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css'],
  animations: [SlideInOutAnimation, IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class MovieListItemComponent implements OnInit {

  @Output() movieDeleteEvent = new EventEmitter<Movie>();
  @Input() movie : Item;
  private expanded : boolean = false;
  animationState = 'out';

  constructor(private movieService : MovieService,
              private tvShowService : TvShowsService,
              private messageSnackBar : MessageSnackbarService,
              private router : Router) { }

  ngOnInit() {
  }

  toggleShowDiv() {
    this.animationState = this.animationState === 'in' ? 'out' : 'in';
    this.expanded = !this.expanded;
  }

  deleteMovie() {
    if (this.router.url.includes('movies')) {
      this.movieService.deleteMovie(this.movie.id).subscribe(result => {
        this.messageSnackBar.openMessageSnackBar("Movie " + this.movie.name + " deleted successfully.");
        this.movieDeleteEvent.next(this.movie);
      }, (error) => {
        this.messageSnackBar.openMessageSnackBar(JSON.stringify(error));
      });
    } else {
      this.tvShowService.deleteTvShow(this.movie.id).subscribe(result => {
        this.messageSnackBar.openMessageSnackBar("Tv show " + this.movie.name + " deleted successfully.");
        this.movieDeleteEvent.next(this.movie);
      }, (error) => {
        this.messageSnackBar.openMessageSnackBar(JSON.stringify(error));
      });
    }
  }

}
