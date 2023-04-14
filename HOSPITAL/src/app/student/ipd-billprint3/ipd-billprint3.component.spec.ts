import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDBillprint3Component } from './ipd-billprint3.component';

describe('IPDBillprint3Component', () => {
  let component: IPDBillprint3Component;
  let fixture: ComponentFixture<IPDBillprint3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDBillprint3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDBillprint3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
