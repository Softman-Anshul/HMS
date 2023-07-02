import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPpageheadingComponent } from './report-PageHeading.component';

describe('ReportPpageheadingComponent', () => {
  let component: ReportPpageheadingComponent;
  let fixture: ComponentFixture<ReportPpageheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPpageheadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPpageheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
