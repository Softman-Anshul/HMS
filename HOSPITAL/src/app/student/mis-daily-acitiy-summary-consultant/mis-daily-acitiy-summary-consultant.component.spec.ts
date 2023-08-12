import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDailyAcitiySummaryConsultantComponent } from './mis-daily-acitiy-summary-consultant.component';

describe('MisDailyAcitiySummaryConsultantComponent', () => {
  let component: MisDailyAcitiySummaryConsultantComponent;
  let fixture: ComponentFixture<MisDailyAcitiySummaryConsultantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisDailyAcitiySummaryConsultantComponent]
    });
    fixture = TestBed.createComponent(MisDailyAcitiySummaryConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
