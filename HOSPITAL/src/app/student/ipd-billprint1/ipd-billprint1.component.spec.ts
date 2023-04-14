import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDBillprint1Component } from './ipd-billprint1.component';

describe('IPDBillprint1Component', () => {
  let component: IPDBillprint1Component;
  let fixture: ComponentFixture<IPDBillprint1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDBillprint1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDBillprint1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
