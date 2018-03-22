import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {OmdbService} from "../../../services/omdb/omdb-service.service";
import {Movie} from "../../../model/movie";
import {MatSnackBar} from "@angular/material";
import {MessageSnackbarService} from "../../../services/error/error-snackbar-service.service";

@Component({
  selector: 'app-get-omdb-movie-dialog',
  templateUrl: './get-omdb-movie-dialog.component.html',
  styleUrls: ['./get-omdb-movie-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GetOmdbMovieDialogComponent implements OnInit {

  private omdbTitle : string;
  private omdbResult : Movie;
  // private omdbMovie : Movie;

  constructor(public omdbService : OmdbService, private messageSnackBarService : MessageSnackbarService) { }

  ngOnInit() {
  }

  getOmdbMovie(title : string) {
    this.omdbService.getOmdbMovie(title).subscribe(result => {
      if (result) {
        this.omdbResult = result;
      }
    });
  }

  storeOmdbMovie() {
    this.omdbService.storeOmdbMovie(this.omdbResult).subscribe((result) => {
      if (result) {
        this.messageSnackBarService.openMessageSnackBar("Saving successfully. Result: " + result);
      } else {
        this.messageSnackBarService.openMessageSnackBar("Saving failed. Result: " + result);
      }
    }, (err) => {
      this.messageSnackBarService.openMessageSnackBar("Error: " + err.message);
    });
  }

}
