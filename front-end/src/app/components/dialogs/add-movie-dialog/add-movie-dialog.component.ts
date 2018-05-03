import {Component, OnInit, ViewEncapsulation, Inject} from '@angular/core';
import {Movie} from "../../../model/movie";
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-add-movie-dialog',
  templateUrl: './add-movie-dialog.component.html',
  styleUrls: ['./add-movie-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddMovieDialogComponent implements OnInit {

  private newMovie: Movie = new Movie();

  //noinspection JSAnnotator
  constructor(public dialogRef: MatDialogRef<AddMovieDialogComponent>) { }

  ngOnInit() {
  }

}
