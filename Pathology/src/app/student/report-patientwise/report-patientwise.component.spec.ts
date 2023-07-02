import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPatientwiseComponent } from './report-patientwise.component';

describe('ReportPatientwiseComponent', () => {
  let component: ReportPatientwiseComponent;
  let fixture: ComponentFixture<ReportPatientwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPatientwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPatientwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
