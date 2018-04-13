import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movies-to-import-dialog',
  templateUrl: './movies-to-import-dialog.component.html',
  styleUrls: ['./movies-to-import-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesToImportDialogComponent implements OnInit {

  private titles : string;

  constructor() { }

  ngOnInit() {
  }

}
