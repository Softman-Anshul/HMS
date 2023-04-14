import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDBilldischargeComponent } from './ipd-billdischarge.component';

describe('IPDBilldischargeComponent', () => {
  let component: IPDBilldischargeComponent;
  let fixture: ComponentFixture<IPDBilldischargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDBilldischargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDBilldischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
