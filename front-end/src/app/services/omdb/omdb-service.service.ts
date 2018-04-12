import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Movie} from "../../model/movie";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {Urls} from "../../model/Urls";

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

  public getOmdbMovie(title : string) : Observable<Movie> {
    return this.httpClient.get<Movie>(Urls.OMDB_URL.replace("%s", title), {responseType: 'json'}).timeout(30*1000);
  }

  // public getOmdbMovies(titles : string[]) : Observable<Array<Movie>> {
  //
  // }

  public storeOmdbTvShow(movie : Movie) : Observable<boolean> {
    return this.httpClient.post<boolean>(Urls.OMDB_TVSHOW_STORE_URL, movie, {responseType: 'json'});
  }
}
