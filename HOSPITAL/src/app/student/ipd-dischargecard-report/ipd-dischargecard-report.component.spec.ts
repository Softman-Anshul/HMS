import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdDischargecardReportComponent } from './ipd-dischargecard-report.component';

describe('IpdDischargecardReportComponent', () => {
  let component: IpdDischargecardReportComponent;
  let fixture: ComponentFixture<IpdDischargecardReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdDischargecardReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdDischargecardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
