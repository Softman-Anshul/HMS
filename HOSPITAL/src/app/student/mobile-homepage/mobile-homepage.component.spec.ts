import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomepageComponent } from './mobile-homepage.component';

describe('MobileHomepageComponent', () => {
  let component: MobileHomepageComponent;
  let fixture: ComponentFixture<MobileHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
