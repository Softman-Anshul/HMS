import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDReportUsercollectionComponent } from './opd-report-usercollection.component';

describe('OPDReportUsercollectionComponent', () => {
  let component: OPDReportUsercollectionComponent;
  let fixture: ComponentFixture<OPDReportUsercollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDReportUsercollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDReportUsercollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
