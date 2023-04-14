import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdPaymentStatusSlipComponent } from './ipd-payment-status-slip.component';

describe('IpdPaymentStatusSlipComponent', () => {
  let component: IpdPaymentStatusSlipComponent;
  let fixture: ComponentFixture<IpdPaymentStatusSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdPaymentStatusSlipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdPaymentStatusSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
