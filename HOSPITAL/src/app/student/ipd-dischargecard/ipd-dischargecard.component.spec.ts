import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdDischargecardComponent } from './ipd-dischargecard.component';

describe('IpdDischargecardComponent', () => {
  let component: IpdDischargecardComponent;
  let fixture: ComponentFixture<IpdDischargecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdDischargecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdDischargecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
