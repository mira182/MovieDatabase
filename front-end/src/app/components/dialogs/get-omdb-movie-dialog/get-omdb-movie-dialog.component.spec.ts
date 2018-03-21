import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOmdbMovieDialogComponent } from './get-omdb-movie-dialog.component';

describe('GetOmdbMovieDialogComponent', () => {
  let component: GetOmdbMovieDialogComponent;
  let fixture: ComponentFixture<GetOmdbMovieDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOmdbMovieDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOmdbMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
