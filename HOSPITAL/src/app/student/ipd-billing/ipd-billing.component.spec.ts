import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDBillingComponent } from './ipd-billing.component';

describe('IPDBillingComponent', () => {
  let component: IPDBillingComponent;
  let fixture: ComponentFixture<IPDBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
