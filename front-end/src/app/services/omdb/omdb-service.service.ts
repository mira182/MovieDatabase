import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpParams, HttpRequest} from "@angular/common/http";
import {Movie} from "../../model/movie";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {Urls} from "../../model/Urls";
import {first, mergeMap} from "rxjs/operators";
import {forkJoin} from "rxjs/observable/forkJoin";
import {Test} from "../../model/test";

@Injectable()
export class OmdbService {

  constructor(protected httpClient: HttpClient) { }

  public storeOmdbMovie(movie : Movie) : Observable<boolean> {
    return this.httpClient.post<boolean>(Urls.OMDB_MOVIE_STORE_URL, movie, {responseType: 'json'});
  }

  public storeOmdbMovies(movies : Array<Movie>) : Observable<HttpEvent<any>> {
    let test1 = new Test();
    test1.kokot = "pica";
    let test2 = new Test();
    test2.kokot = "pica";
    let test = [test1, test2];
    const request = new HttpRequest('POST', Urls.OMDB_MOVIES_STORE_URL,  movies, {
      reportProgress: true
    });

    return this.httpClient.request(request);
    // return this.httpClient.post<boolean>(Urls.OMDB_MOVIES_STORE_URL, movies, {responseType: 'json'});
  }

  public getOmdbMovie(title : string) : Observable<Movie> {
    return this.httpClient.get<Movie>(Urls.OMDB_URL.replace("%s", title), {responseType: 'json'});
  }

  public getOmdbMovies(titles : string[]) : Observable<Array<Movie>> {
    let omdbMovieList = titles.map((title, index) => {
      return this.httpClient.get<Movie>(Urls.OMDB_URL.replace("%s", title.trim()))
        .map(movie => movie as Movie)
        .catch((error: any) => {
          console.error('Error loading movies from OMDB: ' + title, 'Error: ', error);
          return Observable.of(null); // In case error occurs, we need to return Observable, so the stream can continue
        });
    });
    return Observable.forkJoin(omdbMovieList);
  }

  public storeOmdbTvShow(movie : Movie) : Observable<boolean> {
    return this.httpClient.post<boolean>(Urls.OMDB_TVSHOW_STORE_URL, movie, {responseType: 'json'});
  }
}
