import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCWCTagSearchComponent } from './vcwc-resume-tag-search.component';

describe('VCWCResumesearchComponent', () => {
  let component: VCWCTagSearchComponent;
  let fixture: ComponentFixture<VCWCTagSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VCWCTagSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VCWCTagSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
