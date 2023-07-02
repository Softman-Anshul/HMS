import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOutsourcereportComponent } from './report-outsourcereport.component';

describe('ReportOutsourcereportComponent', () => {
  let component: ReportOutsourcereportComponent;
  let fixture: ComponentFixture<ReportOutsourcereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOutsourcereportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportOutsourcereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
