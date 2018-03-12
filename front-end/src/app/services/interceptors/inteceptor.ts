import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {TokenStorage} from '../auth/token.storage';
import 'rxjs/add/operator/do';
import {HttpEvent} from "@angular/common/http";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private token: TokenStorage, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const  token = this.token.getToken();

    if (token) {
      req = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
          .set('Content-Type', 'application/json')
      });
    }

    return next.handle(req).do(
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            console.log(err);
            console.log('req url :: ' + req.url);
            if (err.status === 401) {
              this.router.navigate(['/home']);
            }
          }
        }
    );

  }

}
