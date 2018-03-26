import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenreBarComponent } from './movie-genre-bar.component';

describe('MovieGenreBarComponent', () => {
  let component: MovieGenreBarComponent;
  let fixture: ComponentFixture<MovieGenreBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGenreBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGenreBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
