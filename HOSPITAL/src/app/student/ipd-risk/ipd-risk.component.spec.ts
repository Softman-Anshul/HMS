import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdRiskComponent } from './ipd-risk.component';

describe('IpdRiskComponent', () => {
  let component: IpdRiskComponent;
  let fixture: ComponentFixture<IpdRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdRiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
