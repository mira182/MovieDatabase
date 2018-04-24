import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Movie} from "../../model/movie";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {Urls} from "../../model/Urls";
import {TvShow} from "../../model/tvshow";

@Injectable()
export class OmdbService {

  constructor(protected httpClient: HttpClient) { }

  public storeOmdbMovie(movie : Movie) : Observable<boolean> {
    return this.httpClient.post<boolean>(Urls.OMDB_MOVIE_STORE_URL, movie, {responseType: 'json'});
  }

  public storeOmdbMovies(movies : Array<Movie>) : Observable<HttpEvent<any>> {
    const request = new HttpRequest('POST', Urls.OMDB_MOVIES_STORE_URL,  movies, {
      reportProgress: true
    });

    return this.httpClient.request(request);
  }

  public storeOmdbTvShows(tvShows : Array<TvShow>) : Observable<HttpEvent<any>> {
    const request = new HttpRequest('POST', Urls.OMDB_TVSHOWS_STORE_URL,  tvShows, {
      reportProgress: true
    });

    return this.httpClient.request(request);
  }

  public getOmdbMovie(title : string) : Observable<Movie> {
    return this.httpClient.get<Movie>(Urls.OMDB_MOVIE_GET_URL.replace("%s", title), {responseType: 'json'}).timeout(30*1000);
  }

  public getOmdbTvShow(title : string) : Observable<TvShow> {
    return this.httpClient.get<TvShow>(Urls.OMDB_TVSHOW_GET_URL.replace("%s", title), {responseType: 'json'}).timeout(30*1000);
  }

  public storeOmdbTvShow(movie : Movie) : Observable<boolean> {
    return this.httpClient.post<boolean>(Urls.OMDB_TVSHOW_STORE_URL, movie, {responseType: 'json'});
  }
}
