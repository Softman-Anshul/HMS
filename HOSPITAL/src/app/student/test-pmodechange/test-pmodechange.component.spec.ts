import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPmodechangeComponent } from './test-pmodechange.component';

describe('TestPmodechangeComponent', () => {
  let component: TestPmodechangeComponent;
  let fixture: ComponentFixture<TestPmodechangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPmodechangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPmodechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
