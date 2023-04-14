import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterShiftTimingComponent } from './master-shift-timing.component';

describe('MasterShiftTimingComponent', () => {
  let component: MasterShiftTimingComponent;
  let fixture: ComponentFixture<MasterShiftTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterShiftTimingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterShiftTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
