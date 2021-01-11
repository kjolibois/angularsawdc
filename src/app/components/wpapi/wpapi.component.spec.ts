import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpapiComponent } from './wpapi.component';

describe('WpapiComponent', () => {
  let component: WpapiComponent;
  let fixture: ComponentFixture<WpapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WpapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
