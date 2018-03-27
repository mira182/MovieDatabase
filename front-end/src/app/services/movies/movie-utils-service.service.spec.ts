import { TestBed, inject } from '@angular/core/testing';

import { MovieUtilsServiceService } from './movie-utils-service.service';

describe('MovieUtilsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieUtilsServiceService]
    });
  });

  it('should be created', inject([MovieUtilsServiceService], (service: MovieUtilsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
