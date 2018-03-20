import { Injectable } from '@angular/core';

@Injectable()
export class TvshowsService {

  private readonly URL = "http://localhost:8080/tvshows";

  constructor() { }

}
