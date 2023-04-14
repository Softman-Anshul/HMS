import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FILEGenConsentFormComponent } from './file-gen-consent-form.component';

describe('FILEGenConsentFormComponent', () => {
  let component: FILEGenConsentFormComponent;
  let fixture: ComponentFixture<FILEGenConsentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FILEGenConsentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FILEGenConsentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
