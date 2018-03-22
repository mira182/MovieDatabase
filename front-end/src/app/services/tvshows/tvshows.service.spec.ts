import { TestBed, inject } from '@angular/core/testing';

import { TvShowsService } from './tvshows.service';

describe('TvShowsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvShowsService]
    });
  });

  it('should be created', inject([TvShowsService], (service: TvShowsService) => {
    expect(service).toBeTruthy();
  }));
});
