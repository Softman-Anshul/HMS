import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDDISCHARGEComponent } from './ipd-discharge.component';

describe('IPDDISCHARGEComponent', () => {
  let component: IPDDISCHARGEComponent;
  let fixture: ComponentFixture<IPDDISCHARGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDDISCHARGEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDDISCHARGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
