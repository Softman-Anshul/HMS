import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdDoctorchangeComponent } from './ipd-doctorchange.component';

describe('IpdDoctorchangeComponent', () => {
  let component: IpdDoctorchangeComponent;
  let fixture: ComponentFixture<IpdDoctorchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdDoctorchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdDoctorchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
