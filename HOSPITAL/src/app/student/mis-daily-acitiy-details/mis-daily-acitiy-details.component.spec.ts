import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDailyAcitiyDetailsComponent } from './mis-daily-acitiy-details.component';

describe('MisDailyAcitiyDetailsComponent', () => {
  let component: MisDailyAcitiyDetailsComponent;
  let fixture: ComponentFixture<MisDailyAcitiyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisDailyAcitiyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisDailyAcitiyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
