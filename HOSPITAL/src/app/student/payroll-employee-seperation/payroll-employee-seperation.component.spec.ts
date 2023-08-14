import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollEmployeeSeperationComponent } from './payroll-employee-seperation.component';

describe('PayrollEmployeeSeperationComponent', () => {
  let component: PayrollEmployeeSeperationComponent;
  let fixture: ComponentFixture<PayrollEmployeeSeperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollEmployeeSeperationComponent]
    });
    fixture = TestBed.createComponent(PayrollEmployeeSeperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
