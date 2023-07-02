import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPaymodeycollectionComponent } from './report-paymodeycollection.component';

describe('ReportPaymodeycollectionComponent', () => {
  let component: ReportPaymodeycollectionComponent;
  let fixture: ComponentFixture<ReportPaymodeycollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPaymodeycollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPaymodeycollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
