import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDaysummaryComponent } from './report-daysummary.component';

describe('ReportDaysummaryComponent', () => {
  let component: ReportDaysummaryComponent;
  let fixture: ComponentFixture<ReportDaysummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDaysummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDaysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
