import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaymodeComponent } from './test-paymode.component';

describe('TestPaymodeComponent', () => {
  let component: TestPaymodeComponent;
  let fixture: ComponentFixture<TestPaymodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPaymodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPaymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
