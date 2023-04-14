import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDADMITLISTComponent } from './ipd-admitlist.component';

describe('IPDADMITLISTComponent', () => {
  let component: IPDADMITLISTComponent;
  let fixture: ComponentFixture<IPDADMITLISTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDADMITLISTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDADMITLISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
