import {Component, OnInit, ViewEncapsulation, Inject} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {Movie} from "../../../model/movie";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


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
