import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDRoomshiftingComponent } from './ipd-roomshifting.component';

describe('IPDRoomshiftingComponent', () => {
  let component: IPDRoomshiftingComponent;
  let fixture: ComponentFixture<IPDRoomshiftingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDRoomshiftingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDRoomshiftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
