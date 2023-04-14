import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDDaycollectionComponent } from './opd-daycollection.component';

describe('OPDDaycollectionComponent', () => {
  let component: OPDDaycollectionComponent;
  let fixture: ComponentFixture<OPDDaycollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDDaycollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDDaycollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
