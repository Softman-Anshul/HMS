import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdReportDaycollectionComponent } from './ipd-report-daycollection.component';

describe('IpdReportDaycollectionComponent', () => {
  let component: IpdReportDaycollectionComponent;
  let fixture: ComponentFixture<IpdReportDaycollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdReportDaycollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdReportDaycollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
