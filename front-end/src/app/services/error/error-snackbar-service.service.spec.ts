import { TestBed, inject } from '@angular/core/testing';

import { ErrorSnackbarServiceService } from './error-snackbar-service.service';

describe('ErrorSnackbarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorSnackbarServiceService]
    });
  });

  it('should be created', inject([ErrorSnackbarServiceService], (service: ErrorSnackbarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
