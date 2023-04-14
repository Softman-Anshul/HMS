import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdslipaComponent } from './PRINT-OPD-SLIP.component';

describe('OpdslipaComponent', () => {
  let component: OpdslipaComponent;
  let fixture: ComponentFixture<OpdslipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdslipaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdslipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
