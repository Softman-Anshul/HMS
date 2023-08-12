import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSetupSmswhatsappComponent } from './control-setup-smswhatsapp.component';

describe('ControlSetupSmswhatsappComponent', () => {
  let component: ControlSetupSmswhatsappComponent;
  let fixture: ComponentFixture<ControlSetupSmswhatsappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlSetupSmswhatsappComponent]
    });
    fixture = TestBed.createComponent(ControlSetupSmswhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
