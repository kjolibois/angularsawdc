import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAWDCResumeadminComponent } from './sawdc-resumeadmin.component';

describe('SAWDCResumeadminComponent', () => {
  let component: SAWDCResumeadminComponent;
  let fixture: ComponentFixture<SAWDCResumeadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAWDCResumeadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAWDCResumeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
