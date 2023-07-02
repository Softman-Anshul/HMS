import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDoctorchangeComponent } from './test-doctorchange.component';

describe('TestDoctorchangeComponent', () => {
  let component: TestDoctorchangeComponent;
  let fixture: ComponentFixture<TestDoctorchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDoctorchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDoctorchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
