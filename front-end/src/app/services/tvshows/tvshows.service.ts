import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Urls} from "../../model/Urls";
import {TvShow} from "../../model/tvshow";
import {Observable} from "rxjs/Rx";

@Injectable()
export class TvShowsService {


  constructor(protected httpClient: HttpClient) { }

  getAllTvShows() : Observable<TvShow[]>{
    return this.httpClient.get<TvShow[]>(Urls.TV_SHOWS_URL, {responseType: 'json'});
  }
}
