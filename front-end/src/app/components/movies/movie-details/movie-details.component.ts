import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {MovieService} from "../../../services/movies/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ErrorDialogComponent} from "../../dialogs/error-dialog/error-dialog.component";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailsComponent implements OnInit {

  private movie : Movie = new Movie();

  constructor(private movieService : MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(pathParams => {
      this.movieService.getMovie(pathParams['id']).subscribe(movie => {
        this.movie = movie;
      });
    });
  }

}
