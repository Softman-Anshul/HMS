import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdepartmentComponent } from './Master-Department.component';

describe('TestdepartmentComponent', () => {
  let component: TestdepartmentComponent;
  let fixture: ComponentFixture<TestdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestdepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
