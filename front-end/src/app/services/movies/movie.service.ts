import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpParams, HttpRequest} from "@angular/common/http";
import {Movie} from "../../model/movie";
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Urls} from "../../model/Urls";
import {TvShow} from "../../model/tvshow";
import {Page} from "../../model/page";

@Injectable()
export class MovieService {

  private allMovies : Array<Movie>;
  private allTvShows : Array<TvShow>;

  constructor(protected httpClient: HttpClient) { }

  public getAllMovies() : Observable<Array<Movie>> {
      return this.httpClient.get<Movie[]>(Urls.MOVIES_URL, {responseType: 'json'});
  }

  public getMovie(id : number) : Observable<Movie> {
    return this.httpClient.get<Movie>(Urls.MOVIES_URL + "/" + id, {responseType: 'json'});
  }

  public getPaginatedMovies(page : number, size : number) {
    return this.httpClient.get<Page>(Urls.MOVIES_URL, {params: new HttpParams().set('page', page.toString()).set('size', size.toString())});
  }

  public addMovie(movie : Movie) {
    this.httpClient.post<Movie>(Urls.MOVIES_URL, JSON.stringify(movie), {responseType: 'json'})
      .subscribe(data => {
        console.log('Add movie: ' + JSON.stringify(data));
      });
  }

  public importMovies() : Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', Urls.OMDB_IMPORT_MOVIES_URL, Urls.MOVIES_LIST, {
      reportProgress: true
    });
    return this.httpClient.request(req);
  }

  public deleteMovie(id) {
    return this.httpClient.delete(Urls.MOVIES_URL, {params: new HttpParams().set('id', id)});
  }

  public getAllActors() : Observable<string[]> {
    return this.httpClient.get<string[]>(Urls.MOVIES_ACTORS_URL, {responseType: 'json'});
  }
}
