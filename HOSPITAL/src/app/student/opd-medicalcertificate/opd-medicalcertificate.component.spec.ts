import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdMedicalcertificateComponent } from './opd-medicalcertificate.component';

describe('OpdMedicalcertificateComponent', () => {
  let component: OpdMedicalcertificateComponent;
  let fixture: ComponentFixture<OpdMedicalcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdMedicalcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdMedicalcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
