import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcwcComponent } from './vcwc.component';

describe('VcwcComponent', () => {
  let component: VcwcComponent;
  let fixture: ComponentFixture<VcwcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcwcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
