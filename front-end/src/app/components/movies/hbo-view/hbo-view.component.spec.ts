import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HboViewComponent } from './hbo-view.component';

describe('HboViewComponent', () => {
  let component: HboViewComponent;
  let fixture: ComponentFixture<HboViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HboViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HboViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
