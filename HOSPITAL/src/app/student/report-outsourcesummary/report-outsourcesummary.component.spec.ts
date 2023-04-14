import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOutsourcesummaryComponent } from './report-outsourcesummary.component';

describe('ReportOutsourcesummaryComponent', () => {
  let component: ReportOutsourcesummaryComponent;
  let fixture: ComponentFixture<ReportOutsourcesummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOutsourcesummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportOutsourcesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
