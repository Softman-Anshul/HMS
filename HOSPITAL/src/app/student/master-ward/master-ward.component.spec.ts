import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterWardComponent } from './master-ward.component';

describe('MasterWardComponent', () => {
  let component: MasterWardComponent;
  let fixture: ComponentFixture<MasterWardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterWardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterWardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
