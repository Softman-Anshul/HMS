import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDailyAcitiySummaryallheadComponent } from './mis-daily-acitiy-summaryallhead.component';

describe('MisDailyAcitiySummaryallheadComponent', () => {
  let component: MisDailyAcitiySummaryallheadComponent;
  let fixture: ComponentFixture<MisDailyAcitiySummaryallheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisDailyAcitiySummaryallheadComponent]
    });
    fixture = TestBed.createComponent(MisDailyAcitiySummaryallheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
