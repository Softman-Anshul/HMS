import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCitycollectionComponent } from './report-citycollection.component';

describe('ReportCitycollectionComponent', () => {
  let component: ReportCitycollectionComponent;
  let fixture: ComponentFixture<ReportCitycollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCitycollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportCitycollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
