import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdEmergencyCertificateComponent } from './ipd-emergency-certificate.component';

describe('IpdEmergencyCertificateComponent', () => {
  let component: IpdEmergencyCertificateComponent;
  let fixture: ComponentFixture<IpdEmergencyCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdEmergencyCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdEmergencyCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
