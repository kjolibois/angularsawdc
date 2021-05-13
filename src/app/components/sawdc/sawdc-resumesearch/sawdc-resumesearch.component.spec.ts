import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAWDCResumesearchComponent } from './sawdc-resumesearch.component';

describe('SAWDCResumesearchComponent', () => {
  let component: SAWDCResumesearchComponent;
  let fixture: ComponentFixture<SAWDCResumesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAWDCResumesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAWDCResumesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
