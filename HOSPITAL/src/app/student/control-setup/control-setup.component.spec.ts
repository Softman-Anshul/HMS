import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSetupComponent } from './control-setup.component';

describe('ControlSetupComponent', () => {
  let component: ControlSetupComponent;
  let fixture: ComponentFixture<ControlSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
