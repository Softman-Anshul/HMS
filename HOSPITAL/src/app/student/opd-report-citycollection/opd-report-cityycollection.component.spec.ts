import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDReportCityycollectionComponent } from './opd-report-cityycollection.component';

describe('OPDReportCityycollectionComponent', () => {
  let component: OPDReportCityycollectionComponent;
  let fixture: ComponentFixture<OPDReportCityycollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDReportCityycollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDReportCityycollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
