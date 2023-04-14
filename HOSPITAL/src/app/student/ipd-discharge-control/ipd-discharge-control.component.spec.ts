import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdDischargeControlComponent } from './ipd-discharge-control.component';

describe('IpdDischargeControlComponent', () => {
  let component: IpdDischargeControlComponent;
  let fixture: ComponentFixture<IpdDischargeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdDischargeControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdDischargeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
