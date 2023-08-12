import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollEmpmasterComponent } from './payroll-empmaster.component';

describe('PayrollEmpmasterComponent', () => {
  let component: PayrollEmpmasterComponent;
  let fixture: ComponentFixture<PayrollEmpmasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollEmpmasterComponent]
    });
    fixture = TestBed.createComponent(PayrollEmpmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
