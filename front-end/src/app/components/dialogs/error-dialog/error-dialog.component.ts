import {Component, OnInit, ViewEncapsulation, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material";
import {Error} from "../../../model/error";

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public exceptionData : Error, public dialog: MatDialog) { }

  ngOnInit() {
    console.log(JSON.stringify(this.exceptionData));
  }

  openDialog(apiError): void {
    let dialogRef = this.dialog.open(ErrorDialogComponent, {
      data : {
        exceptionData: apiError
      }
    });
  }

}
