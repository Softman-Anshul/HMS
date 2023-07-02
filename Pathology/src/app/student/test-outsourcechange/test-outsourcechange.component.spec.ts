import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOutsourcechangeComponent } from './test-outsourcechange.component';

describe('TestOutsourcechangeComponent', () => {
  let component: TestOutsourcechangeComponent;
  let fixture: ComponentFixture<TestOutsourcechangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOutsourcechangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOutsourcechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
