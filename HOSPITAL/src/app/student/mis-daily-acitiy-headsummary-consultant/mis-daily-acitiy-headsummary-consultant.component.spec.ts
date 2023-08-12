import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDailyAcitiyHeadsummaryConsultantComponent } from './mis-daily-acitiy-headsummary-consultant.component';

describe('MisDailyAcitiyHeadsummaryConsultantComponent', () => {
  let component: MisDailyAcitiyHeadsummaryConsultantComponent;
  let fixture: ComponentFixture<MisDailyAcitiyHeadsummaryConsultantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisDailyAcitiyHeadsummaryConsultantComponent]
    });
    fixture = TestBed.createComponent(MisDailyAcitiyHeadsummaryConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
