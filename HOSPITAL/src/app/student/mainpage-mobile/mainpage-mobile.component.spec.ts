import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageMobileComponent } from './mainpage-mobile.component';

describe('MainpageMobileComponent', () => {
  let component: MainpageMobileComponent;
  let fixture: ComponentFixture<MainpageMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpageMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
