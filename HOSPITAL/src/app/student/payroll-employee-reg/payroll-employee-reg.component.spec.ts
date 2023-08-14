import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollEmployeeRegComponent } from './payroll-employee-reg.component';

describe('PayrollEmployeeRegComponent', () => {
  let component: PayrollEmployeeRegComponent;
  let fixture: ComponentFixture<PayrollEmployeeRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollEmployeeRegComponent]
    });
    fixture = TestBed.createComponent(PayrollEmployeeRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
