import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdBillCorrectionComponent } from './ipd-bill-correction.component';

describe('IpdBillCorrectionComponent', () => {
  let component: IpdBillCorrectionComponent;
  let fixture: ComponentFixture<IpdBillCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdBillCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdBillCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
