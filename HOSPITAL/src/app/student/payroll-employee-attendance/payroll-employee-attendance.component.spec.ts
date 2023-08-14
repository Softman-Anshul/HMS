import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollEmployeeAttendanceComponent } from './payroll-employee-attendance.component';

describe('PayrollEmployeeAttendanceComponent', () => {
  let component: PayrollEmployeeAttendanceComponent;
  let fixture: ComponentFixture<PayrollEmployeeAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollEmployeeAttendanceComponent]
    });
    fixture = TestBed.createComponent(PayrollEmployeeAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
