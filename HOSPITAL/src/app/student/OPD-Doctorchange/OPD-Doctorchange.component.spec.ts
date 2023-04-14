import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpddoctorchangeComponent } from './OPD-Doctorchange.component';

describe('OpddoctorchangeComponent', () => {
  let component: OpddoctorchangeComponent;
  let fixture: ComponentFixture<OpddoctorchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpddoctorchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpddoctorchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
