import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDPaymentdetailsComponent } from './ipd-paymentdetails.component';

describe('IPDPaymentdetailsComponent', () => {
  let component: IPDPaymentdetailsComponent;
  let fixture: ComponentFixture<IPDPaymentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDPaymentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDPaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
