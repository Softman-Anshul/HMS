import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueamountListComponent } from './Test_due_list.component';

describe('DueamountListComponent', () => {
  let component: DueamountListComponent;
  let fixture: ComponentFixture<DueamountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueamountListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueamountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
