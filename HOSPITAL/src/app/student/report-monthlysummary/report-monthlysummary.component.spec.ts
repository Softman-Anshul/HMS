import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMonthlysummaryComponent } from './report-monthlysummary.component';

describe('ReportMonthlysummaryComponent', () => {
  let component: ReportMonthlysummaryComponent;
  let fixture: ComponentFixture<ReportMonthlysummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMonthlysummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportMonthlysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
