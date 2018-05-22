import {Component, OnInit, ViewEncapsulation, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Item} from "../../../model/item";


@Component({
  selector: 'app-add-movie-dialog',
  templateUrl: './add-movie-dialog.component.html',
  styleUrls: ['./add-movie-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddMovieDialogComponent implements OnInit {

  private newMovie: Item;
  private title : string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
  }

  ngOnInit() {
  }

}
