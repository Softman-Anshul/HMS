import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDRegComponent } from './ipd-reg.component';

describe('IPDRegComponent', () => {
  let component: IPDRegComponent;
  let fixture: ComponentFixture<IPDRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
