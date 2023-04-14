import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDailyAcitiyHeadsumdayComponent } from './mis-daily-acitiy-headsumday.component';

describe('MisDailyAcitiyHeadsumdayComponent', () => {
  let component: MisDailyAcitiyHeadsumdayComponent;
  let fixture: ComponentFixture<MisDailyAcitiyHeadsumdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisDailyAcitiyHeadsumdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisDailyAcitiyHeadsumdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
