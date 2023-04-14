import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDReportDaysummaryComponent } from './opd-report-daysummary.component';

describe('OPDReportDaysummaryComponent', () => {
  let component: OPDReportDaysummaryComponent;
  let fixture: ComponentFixture<OPDReportDaysummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDReportDaysummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDReportDaysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
