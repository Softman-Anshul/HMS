import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdparchaComponent } from './PRINT-OPD-parcha.component';

describe('OpdparchaComponent', () => {
  let component: OpdparchaComponent;
  let fixture: ComponentFixture<OpdparchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdparchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdparchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
