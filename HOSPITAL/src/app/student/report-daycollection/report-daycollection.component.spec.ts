import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDaycollectionComponent } from './report-daycollection.component';

describe('ReportDaycollectionComponent', () => {
  let component: ReportDaycollectionComponent;
  let fixture: ComponentFixture<ReportDaycollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDaycollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDaycollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
