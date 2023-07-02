import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentComponent } from './Test_list.component';

describe('ListStudentComponent', () => {
  let component: ListStudentComponent;
  let fixture: ComponentFixture<ListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
