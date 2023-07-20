import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdReportDailycollectionComponent } from './ipd-report-dailycollection.component';

describe('IpdReportDailycollectionComponent', () => {
  let component: IpdReportDailycollectionComponent;
  let fixture: ComponentFixture<IpdReportDailycollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdReportDailycollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdReportDailycollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
