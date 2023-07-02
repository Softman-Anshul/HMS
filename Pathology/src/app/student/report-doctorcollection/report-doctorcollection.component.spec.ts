import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDoctorcollectionComponent } from './report-doctorcollection.component';

describe('ReportDoctorcollectionComponent', () => {
  let component: ReportDoctorcollectionComponent;
  let fixture: ComponentFixture<ReportDoctorcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDoctorcollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDoctorcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
