import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDEMRComponent } from './opd-emr.component';

describe('OPDEMRComponent', () => {
  let component: OPDEMRComponent;
  let fixture: ComponentFixture<OPDEMRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDEMRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDEMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
