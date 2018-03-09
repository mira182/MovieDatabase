import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Movie} from "../model/movie";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  private readonly URL = "http://localhost:8080/movies";

  constructor(protected httpClient: HttpClient) { }

  getAllMovies() {
    // return this.httpClient.get<Movie[]>(this.URL);
    return this.httpClient.get<any>(this.URL)
      .subscribe(data => console.log(data),
        error => console.log('oops', error));
  }
}
