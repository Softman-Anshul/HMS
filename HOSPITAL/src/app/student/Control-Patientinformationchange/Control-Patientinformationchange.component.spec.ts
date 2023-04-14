import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientinformationchangeComponent } from './Control-Patientinformationchange.component';

describe('PatientinformationchangeComponent', () => {
  let component: PatientinformationchangeComponent;
  let fixture: ComponentFixture<PatientinformationchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientinformationchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientinformationchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
