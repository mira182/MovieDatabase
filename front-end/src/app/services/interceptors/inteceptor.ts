import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import {TokenStorage} from '../auth/token.storage';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import {HttpEvent} from "@angular/common/http";
import {MatDialog} from "@angular/material";
import {ErrorDialogComponent} from "../../components/dialogs/error-dialog/error-dialog.component";
import {HttpResponse} from "@angular/common/http";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private token: TokenStorage, private router: Router, public dialog: MatDialog) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const  token = this.token.getToken();

    if (!req.url.includes("omdbapi.com")) {
      if (token) {
        req = req.clone({
          headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
            .set('Content-Type', 'application/json')
        });
      }
    }

    console.log("Request intercepted: " + JSON.stringify(req));
    return next.handle(req)
      .catch((err: HttpErrorResponse) => {
        console.log("http response error: " + JSON.stringify(err));
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error('Backend returned code ' + err.status +  ' body was: ' + JSON.stringify(err.error));

          // is NOT login request
          if (!req.url.endsWith("generate-token")) {
            if (err.status == 401) {
              this.token.signOut();
              this.router.navigate(['/login']);
            } else {
              // this.openDialog(err.error);
              return Observable.throw(err.error);
            }
          } else { // IS login request
            return Observable.throw(err.error);
          }
        }
      });
  }

  openDialog(apiError): void {
    let dialogRef = this.dialog.open(ErrorDialogComponent, {
      data : {
        exceptionData: apiError
      }
    });
  }

}
