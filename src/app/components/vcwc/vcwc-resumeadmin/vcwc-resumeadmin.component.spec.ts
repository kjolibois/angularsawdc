import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCWCResumeadminComponent } from './vcwc-resumeadmin.component';

describe('ResumeadminComponent', () => {
  let component: VCWCResumeadminComponent;
  let fixture: ComponentFixture<VCWCResumeadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VCWCResumeadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VCWCResumeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
