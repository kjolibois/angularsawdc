import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCWCResumesearchComponent } from './vcwc-resumesearch.component';

describe('VCWCResumesearchComponent', () => {
  let component: VCWCResumesearchComponent;
  let fixture: ComponentFixture<VCWCResumesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VCWCResumesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VCWCResumesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
