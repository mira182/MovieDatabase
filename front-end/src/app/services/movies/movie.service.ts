import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Movie} from "../../model/movie";
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {TvShow} from "../../model/tvshow";
import {HttpErrorResponse} from "@angular/common/http";
import {Urls} from "../../model/Urls";

@Injectable()
export class MovieService {

  private allMovies : Array<Movie>;

  constructor(protected httpClient: HttpClient) { }

  public getAllMovies() : Observable<Array<Movie>> {
      return this.httpClient.get<Movie[]>(Urls.MOVIES_URL, {responseType: 'json'});
  }

  public setAllMovies(allMovies : Array<Movie>) {
    this.allMovies = allMovies;
  }

  public getMoviesByGenre(genre : string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(Urls.MOVIES_URL, {params: new HttpParams().set('genre', genre)});
  }

  public addMovie(movie : Movie) {
    this.httpClient.post<Movie>(Urls.MOVIES_URL, JSON.stringify(movie), {responseType: 'json'})
      .subscribe(data => {
        console.log('Add movie: ' + JSON.stringify(data));
      });
  }

  public importMovies() {
    this.httpClient.post<any>(Urls.OMDB_IMPORT_MOVIES_URL, Urls.MOVIES_LIST, {responseType: 'json'})
      .subscribe(data => {
        console.log('response: ' + data);
      });
  }

  deleteMovie(id) {
    return this.httpClient.delete(Urls.MOVIES_URL, {params: new HttpParams().set('id', id)});
  }
}
