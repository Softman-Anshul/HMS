import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDSRComponent } from './report-dsr.component';

describe('ReportDSRComponent', () => {
  let component: ReportDSRComponent;
  let fixture: ComponentFixture<ReportDSRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDSRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDSRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
