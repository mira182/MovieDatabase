import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {IndicatorRotate, SlideInOutAnimation} from "../../animations/animations";
import {MovieService} from "../../../services/movies/movie.service";
import {MessageSnackbarService} from "../../../services/error/error-snackbar-service.service";

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css'],
  animations: [SlideInOutAnimation, IndicatorRotate],
  encapsulation: ViewEncapsulation.None
})
export class MovieListItemComponent implements OnInit {

  @Output() movieDeleteEvent = new EventEmitter<Movie>();
  @Input() movie : Movie;
  private expanded : boolean = false;
  animationState = 'out';

  constructor(private movieService : MovieService, private messageSnackBar : MessageSnackbarService) { }

  ngOnInit() {
  }

  toggleShowDiv() {
    this.animationState = this.animationState === 'in' ? 'out' : 'in';
    this.expanded = !this.expanded;
  }

  deleteMovie() {
    this.movieService.deleteMovie(this.movie.id).subscribe((result) => {
      this.messageSnackBar.openMessageSnackBar("Movie " + this.movie.name + " deleted successfully.");
      this.movieDeleteEvent.next(this.movie);
    }, (error) => {
      this.messageSnackBar.openMessageSnackBar(JSON.stringify(error));
    });
  }

}
