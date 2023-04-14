import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdToolTipComponent } from './ipd-tool-tip.component';

describe('IpdToolTipComponent', () => {
  let component: IpdToolTipComponent;
  let fixture: ComponentFixture<IpdToolTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdToolTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
