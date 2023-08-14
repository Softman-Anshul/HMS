import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollEmployeeSalaryComponent } from './payroll-employee-salary.component';

describe('PayrollEmployeeSalaryComponent', () => {
  let component: PayrollEmployeeSalaryComponent;
  let fixture: ComponentFixture<PayrollEmployeeSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollEmployeeSalaryComponent]
    });
    fixture = TestBed.createComponent(PayrollEmployeeSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
