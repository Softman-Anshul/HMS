import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDReportDoctorsummaryComponent } from './opd-report-doctorsummary.component';

describe('OPDReportDoctorsummaryComponent', () => {
  let component: OPDReportDoctorsummaryComponent;
  let fixture: ComponentFixture<OPDReportDoctorsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDReportDoctorsummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDReportDoctorsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
