import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlcInjuryreportComponent } from './ipd-mlc-injuryreport.component';

describe('MlcInjuryreportComponent', () => {
  let component: MlcInjuryreportComponent;
  let fixture: ComponentFixture<MlcInjuryreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlcInjuryreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlcInjuryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
