import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPayrollComponent } from './Menu-payroll.component';

describe('ControlPayrollComponent', () => {
  let component: ControlPayrollComponent;
  let fixture: ComponentFixture<ControlPayrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPayrollComponent]
    });
    fixture = TestBed.createComponent(ControlPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
