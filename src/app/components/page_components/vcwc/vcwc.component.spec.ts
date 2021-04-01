import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCWCHomeComponent } from './vcwc.component';

describe('VCWCHomeComponent', () => {
  let component: VCWCHomeComponent;
  let fixture: ComponentFixture<VCWCHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VCWCHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VCWCHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
