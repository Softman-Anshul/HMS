import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDReportCitysummarynComponent } from './opd-report-citysummary.component';

describe('OPDReportCitysummarynComponent', () => {
  let component: OPDReportCitysummarynComponent;
  let fixture: ComponentFixture<OPDReportCitysummarynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDReportCitysummarynComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDReportCitysummarynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
