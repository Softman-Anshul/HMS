import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdMedicalcertificatePrintComponent } from './opd-medicalcertificate-print.component';

describe('OpdMedicalcertificatePrintComponent', () => {
  let component: OpdMedicalcertificatePrintComponent;
  let fixture: ComponentFixture<OpdMedicalcertificatePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdMedicalcertificatePrintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdMedicalcertificatePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
