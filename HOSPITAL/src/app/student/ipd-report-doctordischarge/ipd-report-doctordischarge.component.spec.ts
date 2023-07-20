import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdReportDoctordischargeComponent } from './ipd-report-doctordischarge.component';

describe('IpdReportDoctordischargeComponent', () => {
  let component: IpdReportDoctordischargeComponent;
  let fixture: ComponentFixture<IpdReportDoctordischargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdReportDoctordischargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdReportDoctordischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
