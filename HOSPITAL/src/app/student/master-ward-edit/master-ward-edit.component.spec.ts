import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterWardEditComponent } from './master-ward-edit.component';

describe('MasterWardEditComponent', () => {
  let component: MasterWardEditComponent;
  let fixture: ComponentFixture<MasterWardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterWardEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterWardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
