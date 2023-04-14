import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDueRecivedComponent } from './test-due-recived.component';

describe('TestDueRecivedComponent', () => {
  let component: TestDueRecivedComponent;
  let fixture: ComponentFixture<TestDueRecivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDueRecivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDueRecivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
