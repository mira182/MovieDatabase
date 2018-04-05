import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpParams, HttpRequest} from "@angular/common/http";
import {Urls} from "../../model/Urls";
import {TvShow} from "../../model/tvshow";
import {Observable} from "rxjs/Rx";
import {Movie} from "../../model/movie";

@Injectable()
export class TvShowsService {


  constructor(protected httpClient: HttpClient) { }

  getAllTvShows() : Observable<Array<TvShow>>{
    return this.httpClient.get<TvShow[]>(Urls.TV_SHOWS_URL, {responseType: 'json'});
  }

  importTvShows() {
    const req = new HttpRequest('POST', Urls.OMDB_IMPORT_TV_SHOWS_URL, Urls.TV_SHOWS_LIST, {
      reportProgress: true
    });
    return this.httpClient.request(req);
  }

  deleteTvShow(id) {
    return this.httpClient.delete(Urls.TV_SHOWS_URL, {params: new HttpParams().set('id', id)});
  }

  public addTvShow(tvShow : TvShow) {
    this.httpClient.post<TvShow>(Urls.MOVIES_URL, JSON.stringify(tvShow), {responseType: 'json'})
      .subscribe(data => {
        console.log('Add tv show: ' + JSON.stringify(data));
      });
  }
}
