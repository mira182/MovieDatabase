import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Injectable()
export class MessageSnackbarService {

  constructor(private messageSnackBar : MatSnackBar) { }

  openMessageSnackBar(message : string, ) {
    this.messageSnackBar.open(message, "Close", {duration : 6000});
  }
}
