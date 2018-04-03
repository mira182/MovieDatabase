import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListGenreComponent } from './movies-list-genre.component';

describe('MoviesListGenreComponent', () => {
  let component: MoviesListGenreComponent;
  let fixture: ComponentFixture<MoviesListGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
