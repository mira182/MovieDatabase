import { TestBed, inject } from '@angular/core/testing';

import { SidenavServiceService } from './sidenav-service.service';

describe('SidenavServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidenavServiceService]
    });
  });

  it('should be created', inject([SidenavServiceService], (service: SidenavServiceService) => {
    expect(service).toBeTruthy();
  }));
});
