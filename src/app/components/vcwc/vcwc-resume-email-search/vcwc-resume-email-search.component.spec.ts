import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCWCEmailSearchComponent } from './vcwc-resume-email-search.component';

describe('VCWCEmailSearchComponent', () => {
  let component: VCWCEmailSearchComponent;
  let fixture: ComponentFixture<VCWCEmailSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VCWCEmailSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VCWCEmailSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
