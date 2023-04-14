import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDReportDoctorcollectionComponent } from './opd-report-doctorcollection.component';

describe('OPDReportDoctorcollectionComponent', () => {
  let component: OPDReportDoctorcollectionComponent;
  let fixture: ComponentFixture<OPDReportDoctorcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDReportDoctorcollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDReportDoctorcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
