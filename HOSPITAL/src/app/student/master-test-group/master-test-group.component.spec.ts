import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTestGroupComponent } from './master-test-group.component';

describe('MasterTestGroupComponent', () => {
  let component: MasterTestGroupComponent;
  let fixture: ComponentFixture<MasterTestGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterTestGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterTestGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
