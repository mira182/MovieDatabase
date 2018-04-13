import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesToImportDialogComponent } from './movies-to-import-dialog.component';

describe('MoviesToImportDialogComponent', () => {
  let component: MoviesToImportDialogComponent;
  let fixture: ComponentFixture<MoviesToImportDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesToImportDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesToImportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
