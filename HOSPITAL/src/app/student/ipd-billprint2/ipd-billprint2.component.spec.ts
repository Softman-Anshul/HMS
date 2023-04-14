import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDBillprint2Component } from './ipd-billprint2.component';

describe('IPDBillprint2Component', () => {
  let component: IPDBillprint2Component;
  let fixture: ComponentFixture<IPDBillprint2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDBillprint2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDBillprint2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
