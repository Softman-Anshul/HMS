import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterChargesComponent } from './Master-Charges.component';

describe('MasterChargesComponent', () => {
  let component: MasterChargesComponent;
  let fixture: ComponentFixture<MasterChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterChargesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
