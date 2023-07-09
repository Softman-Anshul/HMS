import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdBillingToolTipComponent } from './ipd-billing-tool-tip.component';

describe('IpdBillingToolTipComponent', () => {
  let component: IpdBillingToolTipComponent;
  let fixture: ComponentFixture<IpdBillingToolTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdBillingToolTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdBillingToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
