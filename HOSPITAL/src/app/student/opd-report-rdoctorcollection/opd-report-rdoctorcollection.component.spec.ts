import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDReportRdoctorcollectionComponent } from './opd-report-rdoctorcollection.component';

describe('OPDReportRdoctorcollectionComponent', () => {
  let component: OPDReportRdoctorcollectionComponent;
  let fixture: ComponentFixture<OPDReportRdoctorcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDReportRdoctorcollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDReportRdoctorcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
