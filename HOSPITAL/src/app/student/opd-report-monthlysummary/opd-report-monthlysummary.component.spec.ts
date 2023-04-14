import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDReportMonthlysummaryComponent } from './opd-report-monthlysummary.component';

describe('OPDReportMonthlysummaryComponent', () => {
  let component: OPDReportMonthlysummaryComponent;
  let fixture: ComponentFixture<OPDReportMonthlysummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDReportMonthlysummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDReportMonthlysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
