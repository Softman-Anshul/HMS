import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdMasterReportComponent } from './opd-master-report.component';

describe('OpdMasterReportComponent', () => {
  let component: OpdMasterReportComponent;
  let fixture: ComponentFixture<OpdMasterReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdMasterReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdMasterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
