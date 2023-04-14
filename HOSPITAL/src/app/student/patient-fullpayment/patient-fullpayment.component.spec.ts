import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFullpaymentComponent } from './patient-fullpayment.component';

describe('PatientFullpaymentComponent', () => {
  let component: PatientFullpaymentComponent;
  let fixture: ComponentFixture<PatientFullpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFullpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientFullpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
