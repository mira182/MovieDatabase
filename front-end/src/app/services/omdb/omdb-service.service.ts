import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Movie} from "../../model/movie";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {Urls} from "../../model/Urls";

@Injectable()
export class OmdbService {

  constructor(protected httpClient: HttpClient) { }

  public storeOmdbMovie(movie : Movie) : Observable<boolean> {
    return this.httpClient.post<boolean>(Urls.OMDB_STORE_URL, movie, {responseType: 'json'});
  }

  public getOmdbMovie(title : string) : Observable<Movie> {
    return this.httpClient.get<Movie>(Urls.OMDB_URL.replace("%s", title), {responseType: 'json'});
  }
}
