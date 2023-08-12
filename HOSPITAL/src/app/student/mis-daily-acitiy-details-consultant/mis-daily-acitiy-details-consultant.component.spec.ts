import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDailyAcitiyDetailsConsultantComponent } from './mis-daily-acitiy-details-consultant.component';

describe('MisDailyAcitiyDetailsConsultantComponent', () => {
  let component: MisDailyAcitiyDetailsConsultantComponent;
  let fixture: ComponentFixture<MisDailyAcitiyDetailsConsultantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisDailyAcitiyDetailsConsultantComponent]
    });
    fixture = TestBed.createComponent(MisDailyAcitiyDetailsConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
