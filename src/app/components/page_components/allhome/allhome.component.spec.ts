import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllhomeComponent } from './allhome.component';

describe('AllhomeComponent', () => {
  let component: AllhomeComponent;
  let fixture: ComponentFixture<AllhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
