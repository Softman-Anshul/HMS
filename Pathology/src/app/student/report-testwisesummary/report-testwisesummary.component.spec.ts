import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTestwisesummaryComponent } from './report-testwisesummary.component';

describe('ReportTestwisesummaryComponent', () => {
  let component: ReportTestwisesummaryComponent;
  let fixture: ComponentFixture<ReportTestwisesummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTestwisesummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTestwisesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
