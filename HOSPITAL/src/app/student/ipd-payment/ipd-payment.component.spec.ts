import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDPaymentComponent } from './ipd-payment.component';

describe('IPDPaymentComponent', () => {
  let component: IPDPaymentComponent;
  let fixture: ComponentFixture<IPDPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
