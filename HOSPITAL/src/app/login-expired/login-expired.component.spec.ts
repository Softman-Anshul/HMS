import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExpiredComponent } from './login-expired.component';

describe('LoginExpiredComponent', () => {
  let component: LoginExpiredComponent;
  let fixture: ComponentFixture<LoginExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginExpiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
