import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDailyAcitiyHeadsComponent } from './mis-daily-acitiy-heads.component';

describe('MisDailyAcitiyHeadsComponent', () => {
  let component: MisDailyAcitiyHeadsComponent;
  let fixture: ComponentFixture<MisDailyAcitiyHeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisDailyAcitiyHeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisDailyAcitiyHeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
