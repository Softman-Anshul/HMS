import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FILEAdmittricketComponent } from './file-admittricket.component';

describe('FILEAdmittricketComponent', () => {
  let component: FILEAdmittricketComponent;
  let fixture: ComponentFixture<FILEAdmittricketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FILEAdmittricketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FILEAdmittricketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
