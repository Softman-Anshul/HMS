import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTestwisereportyComponent } from './report-testwisereporty.component';

describe('ReportTestwisereportyComponent', () => {
  let component: ReportTestwisereportyComponent;
  let fixture: ComponentFixture<ReportTestwisereportyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTestwisereportyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTestwisereportyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
