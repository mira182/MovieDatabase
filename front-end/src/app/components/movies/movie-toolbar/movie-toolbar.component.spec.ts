import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieToolbarComponent } from './movie-toolbar.component';

describe('MovieToolbarComponent', () => {
  let component: MovieToolbarComponent;
  let fixture: ComponentFixture<MovieToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
