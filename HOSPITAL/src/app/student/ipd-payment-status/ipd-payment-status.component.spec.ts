import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdPaymentStatusComponent } from './ipd-payment-status.component';

describe('IpdPaymentStatusComponent', () => {
  let component: IpdPaymentStatusComponent;
  let fixture: ComponentFixture<IpdPaymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdPaymentStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdPaymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
