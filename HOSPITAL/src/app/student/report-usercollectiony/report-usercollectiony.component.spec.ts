import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUsercollectionyComponent } from './report-usercollectiony.component';

describe('ReportUsercollectionyComponent', () => {
  let component: ReportUsercollectionyComponent;
  let fixture: ComponentFixture<ReportUsercollectionyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportUsercollectionyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportUsercollectionyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
