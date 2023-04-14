import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDailyAcitiySummaryComponent } from './mis-daily-acitiy-summary.component';

describe('MisDailyAcitiySummaryComponent', () => {
  let component: MisDailyAcitiySummaryComponent;
  let fixture: ComponentFixture<MisDailyAcitiySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisDailyAcitiySummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisDailyAcitiySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
