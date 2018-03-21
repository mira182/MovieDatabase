import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../../model/movie";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class OmdbService {

  private readonly URL = "http://localhost:8080/omdb/storeOmdbMovie";
  private readonly OMDB_URL = "http://www.omdbapi.com/?t=%s&apikey=3534d3d7";

  constructor(protected httpClient: HttpClient) { }

  public storeOmdbMovie(movie : Movie) : Observable<boolean> {
    return this.httpClient.post<boolean>(this.URL, movie, {responseType: 'json'});
  }

  public getOmdbMovie(title : string) : Observable<Movie> {
    return this.httpClient.get<Movie>(this.OMDB_URL.replace("%s", title), {responseType: 'json'});
  }
}
