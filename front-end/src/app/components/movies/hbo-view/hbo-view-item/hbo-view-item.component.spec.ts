import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HboViewItemComponent } from './hbo-view-item.component';

describe('HboViewItemComponent', () => {
  let component: HboViewItemComponent;
  let fixture: ComponentFixture<HboViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HboViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HboViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
