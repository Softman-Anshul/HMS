import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittStudentComponent } from './editt-student.component';

describe('EdittStudentComponent', () => {
  let component: EdittStudentComponent;
  let fixture: ComponentFixture<EdittStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
