import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdReportDoctormonthComponent } from './opd-report-doctormonth.component';

describe('OpdReportDoctormonthComponent', () => {
  let component: OpdReportDoctormonthComponent;
  let fixture: ComponentFixture<OpdReportDoctormonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdReportDoctormonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdReportDoctormonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
