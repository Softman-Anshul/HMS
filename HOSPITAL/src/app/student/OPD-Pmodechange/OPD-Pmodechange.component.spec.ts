import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdpmodechangeComponent } from './OPD-Pmodechange.component';

describe('OpdpmodechangeComponent', () => {
  let component: OpdpmodechangeComponent;
  let fixture: ComponentFixture<OpdpmodechangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdpmodechangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdpmodechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
