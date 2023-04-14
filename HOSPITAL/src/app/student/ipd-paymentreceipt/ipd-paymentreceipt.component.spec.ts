import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDPaymentreceiptComponent } from './ipd-paymentreceipt.component';

describe('IPDPaymentreceiptComponent', () => {
  let component: IPDPaymentreceiptComponent;
  let fixture: ComponentFixture<IPDPaymentreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDPaymentreceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDPaymentreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
