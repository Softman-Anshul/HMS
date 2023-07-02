import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmasterProfileComponent } from './testmaster-profile.component';

describe('TestmasterProfileComponent', () => {
  let component: TestmasterProfileComponent;
  let fixture: ComponentFixture<TestmasterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestmasterProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestmasterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
