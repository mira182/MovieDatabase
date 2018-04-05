import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Urls} from "../../model/Urls";

@Injectable()
export class AuthService {

  public loggedIn: boolean;

  constructor(private http: HttpClient) {
  }

  attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post<any>(Urls.GENERATE_TOKEN, credentials);
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }
}
