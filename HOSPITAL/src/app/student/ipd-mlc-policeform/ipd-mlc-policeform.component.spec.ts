import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlcPoliceformComponent } from './ipd-mlc-policeform.component';

describe('MlcPoliceformComponent', () => {
  let component: MlcPoliceformComponent;
  let fixture: ComponentFixture<MlcPoliceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlcPoliceformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlcPoliceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
