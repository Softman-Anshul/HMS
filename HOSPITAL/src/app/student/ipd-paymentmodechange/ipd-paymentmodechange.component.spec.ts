import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDPaymentmodechangeComponent } from './ipd-paymentmodechange.component';

describe('IPDPaymentmodechangeComponent', () => {
  let component: IPDPaymentmodechangeComponent;
  let fixture: ComponentFixture<IPDPaymentmodechangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDPaymentmodechangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDPaymentmodechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
