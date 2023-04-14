import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDailyAcitiyHeadmonthComponent } from './mis-daily-acitiy-headmonth.component';

describe('MisDailyAcitiyHeadmonthComponent', () => {
  let component: MisDailyAcitiyHeadmonthComponent;
  let fixture: ComponentFixture<MisDailyAcitiyHeadmonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisDailyAcitiyHeadmonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisDailyAcitiyHeadmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
