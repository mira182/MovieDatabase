import {Component, OnInit, ViewEncapsulation, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material";
import {ApiError} from "../../../model/apierror";

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public exceptionData : any) { }

  ngOnInit() {
  }

}
