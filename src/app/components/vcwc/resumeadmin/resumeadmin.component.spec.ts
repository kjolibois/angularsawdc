import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeadminComponent } from './resumeadmin.component';

describe('ResumeadminComponent', () => {
  let component: ResumeadminComponent;
  let fixture: ComponentFixture<ResumeadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
