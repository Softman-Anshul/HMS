import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterWardInsertComponent } from './master-ward-insert.component';

describe('MasterWardInsertComponent', () => {
  let component: MasterWardInsertComponent;
  let fixture: ComponentFixture<MasterWardInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterWardInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterWardInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
