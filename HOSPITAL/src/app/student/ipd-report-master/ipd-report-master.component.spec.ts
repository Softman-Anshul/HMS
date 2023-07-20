import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdReportMasterComponent } from './ipd-report-master.component';

describe('IpdReportMasterComponent', () => {
  let component: IpdReportMasterComponent;
  let fixture: ComponentFixture<IpdReportMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdReportMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdReportMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
