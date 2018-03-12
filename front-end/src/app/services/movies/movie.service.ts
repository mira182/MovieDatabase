import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Movie} from "../../model/movie";
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {OmdbMovie} from "../../model/omdbMovie";
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
        console.log('add movie: ' + data);
      });
  }

  public getOmdbMovie(title : string) : Observable<OmdbMovie> {
    return this.httpClient.get<OmdbMovie>('http://localhost:8080/omdb/omdbMovie', {responseType: 'json', params: new HttpParams().set('title', title)});
  }

}
