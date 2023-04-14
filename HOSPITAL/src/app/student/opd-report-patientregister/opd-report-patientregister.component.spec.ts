import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDReportPatientregisterComponent } from './opd-report-patientregister.component';

describe('OPDReportPatientregisterComponent', () => {
  let component: OPDReportPatientregisterComponent;
  let fixture: ComponentFixture<OPDReportPatientregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDReportPatientregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDReportPatientregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
