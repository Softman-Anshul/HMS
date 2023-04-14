import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDReportRdoctonsummaryComponent } from './opd-report-rdoctonsummary.component';

describe('OPDReportRdoctonsummaryComponent', () => {
  let component: OPDReportRdoctonsummaryComponent;
  let fixture: ComponentFixture<OPDReportRdoctonsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDReportRdoctonsummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDReportRdoctonsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
