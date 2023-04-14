import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdrefundComponent } from './OPD-refund.component';

describe('OpdrefundComponent', () => {
  let component: OpdrefundComponent;
  let fixture: ComponentFixture<OpdrefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdrefundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdrefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
