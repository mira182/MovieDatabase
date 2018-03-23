import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Urls} from "../../model/Urls";
import {TvShow} from "../../model/tvshow";
import {Observable} from "rxjs/Rx";

@Injectable()
export class TvShowsService {


  constructor(protected httpClient: HttpClient) { }

  getAllTvShows() : Observable<Array<TvShow>>{
    return this.httpClient.get<TvShow[]>(Urls.TV_SHOWS_URL, {responseType: 'json'});
  }

  importTvShows() : Observable<any> {
    return this.httpClient.post<any>(Urls.OMDB_IMPORT_TV_SHOWS_URL, Urls.TV_SHOWS_LIST, {responseType: 'json', reportProgress: true});
  }

  deleteTvShow(id) {
    return this.httpClient.delete(Urls.TV_SHOWS_URL, {params: new HttpParams().set('id', id)});
  }
}
