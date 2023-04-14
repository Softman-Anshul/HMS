import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCitysummaryComponent } from './report-citysummary.component';

describe('ReportCitysummaryComponent', () => {
  let component: ReportCitysummaryComponent;
  let fixture: ComponentFixture<ReportCitysummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCitysummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportCitysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
