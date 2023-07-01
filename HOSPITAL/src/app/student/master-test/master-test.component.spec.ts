import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTestComponent } from './master-test.component';

describe('MasterTestComponent', () => {
  let component: MasterTestComponent;
  let fixture: ComponentFixture<MasterTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
