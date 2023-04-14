import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsultantMasterComponent } from './edit-consultant-master.component';

describe('EditConsultantMasterComponent', () => {
  let component: EditConsultantMasterComponent;
  let fixture: ComponentFixture<EditConsultantMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsultantMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditConsultantMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
