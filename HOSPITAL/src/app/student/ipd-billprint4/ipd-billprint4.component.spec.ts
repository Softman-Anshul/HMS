import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDBillprint4Component } from './ipd-billprint4.component';

describe('IPDBillprint4Component', () => {
  let component: IPDBillprint4Component;
  let fixture: ComponentFixture<IPDBillprint4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDBillprint4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDBillprint4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
