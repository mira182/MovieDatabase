import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../model/movie";
import {MovieService} from "../../../services/movies/movie.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material";
import {EditMovieDialogComponent} from "../../dialogs/edit-movie-dialog/edit-movie-dialog.component";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailsComponent implements OnInit {

  private movie : Movie = new Movie();

  constructor(private movieService : MovieService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(pathParams => {
      this.movieService.getMovie(pathParams['id']).subscribe(movie => {
        this.movie = movie;
      });
    });
  }

  editMovie() {
    let dialogRef = this.dialog.open(EditMovieDialogComponent, {
      width: '600px',
      data: {movie: this.movie}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
