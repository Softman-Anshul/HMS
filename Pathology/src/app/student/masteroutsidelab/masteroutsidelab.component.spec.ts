import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteroutsidelabComponent } from './masteroutsidelab.component';

describe('MasteroutsidelabComponent', () => {
  let component: MasteroutsidelabComponent;
  let fixture: ComponentFixture<MasteroutsidelabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasteroutsidelabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasteroutsidelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
