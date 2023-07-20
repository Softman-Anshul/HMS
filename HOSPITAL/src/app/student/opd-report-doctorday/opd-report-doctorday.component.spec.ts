import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdReportDoctordayComponent } from './opd-report-doctorday.component';

describe('OpdReportDoctordayComponent', () => {
  let component: OpdReportDoctordayComponent;
  let fixture: ComponentFixture<OpdReportDoctordayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdReportDoctordayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdReportDoctordayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
