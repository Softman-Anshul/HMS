import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDReportPaymodecollectionComponent } from './opd-report-paymodecollection.component';

describe('OPDReportPaymodecollectionComponent', () => {
  let component: OPDReportPaymodecollectionComponent;
  let fixture: ComponentFixture<OPDReportPaymodecollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDReportPaymodecollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDReportPaymodecollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
