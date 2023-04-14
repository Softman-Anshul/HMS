import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDoctorysummaryComponent } from './report-doctorysummary.component';

describe('ReportDoctorysummaryComponent', () => {
  let component: ReportDoctorysummaryComponent;
  let fixture: ComponentFixture<ReportDoctorysummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDoctorysummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDoctorysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
