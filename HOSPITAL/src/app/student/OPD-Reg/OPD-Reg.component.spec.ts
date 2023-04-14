import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdregComponent } from './OPD-Reg.component';

describe('OpdregComponent', () => {
  let component: OpdregComponent;
  let fixture: ComponentFixture<OpdregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
