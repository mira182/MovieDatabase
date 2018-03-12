import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Movie} from "../../model/movie";
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class MovieService {

  private readonly URL = "http://localhost:8080/movies";

  constructor(protected httpClient: HttpClient) { }

  public getAllMovies(): Observable<Movie[]> { //
    return this.httpClient.get<Movie[]>(this.URL, {responseType: 'json'});
  }

  public addMovie(movie : Movie) {
    this.httpClient.post<Movie>('http://localhost:8080/movies', JSON.stringify(movie), {responseType: 'json'})
      .subscribe(data => {
        console.log('Add movie: ' + data);
      });
  }

  public getOmdbMovie(title : string) : Observable<Movie> {
    return this.httpClient.get<Movie>('http://localhost:8080/omdb/omdbMovie', {params: new HttpParams().set('title', title)});
  }

  public importMovie(title : string) : Observable<Movie> {
    return this.httpClient.get<Movie>('http://localhost:8080/omdb/importMovie', {params: new HttpParams().set('title', title)});
  }

}
