import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmasterWordComponent } from './testmaster-word.component';

describe('TestmasterWordComponent', () => {
  let component: TestmasterWordComponent;
  let fixture: ComponentFixture<TestmasterWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestmasterWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestmasterWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
