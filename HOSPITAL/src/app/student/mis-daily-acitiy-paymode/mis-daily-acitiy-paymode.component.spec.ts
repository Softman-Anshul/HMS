import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDailyAcitiyPaymodeComponent } from './mis-daily-acitiy-paymode.component';

describe('MisDailyAcitiyPaymodeComponent', () => {
  let component: MisDailyAcitiyPaymodeComponent;
  let fixture: ComponentFixture<MisDailyAcitiyPaymodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisDailyAcitiyPaymodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisDailyAcitiyPaymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
