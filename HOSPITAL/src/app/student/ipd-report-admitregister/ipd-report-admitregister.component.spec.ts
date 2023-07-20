import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdReportAdmitregisterComponent } from './ipd-report-admitregister.component';

describe('IpdReportAdmitregisterComponent', () => {
  let component: IpdReportAdmitregisterComponent;
  let fixture: ComponentFixture<IpdReportAdmitregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdReportAdmitregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdReportAdmitregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
