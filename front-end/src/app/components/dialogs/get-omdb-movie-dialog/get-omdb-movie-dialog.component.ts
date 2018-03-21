import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {OmdbService} from "../../../services/omdb/omdb-service.service";
import {Movie} from "../../../model/movie";
import {MatSnackBar} from "@angular/material";

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

  constructor(public omdbService : OmdbService, public snackBar: MatSnackBar) { }

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
        this.openSnackBar("Saving successfully. Result: " + result);
      } else {
        this.openSnackBar("Saving failed. Result: " + result);
      }
    }, (err) => {
      this.openSnackBar("Error: " + err.message);
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000
    });
  }

}
