import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdGatepassComponent } from './ipd-gatepass.component';

describe('IpdGatepassComponent', () => {
  let component: IpdGatepassComponent;
  let fixture: ComponentFixture<IpdGatepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdGatepassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdGatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
