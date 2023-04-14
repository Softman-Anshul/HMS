import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdDueListComponent } from './ipd-due-list.component';

describe('IpdDueListComponent', () => {
  let component: IpdDueListComponent;
  let fixture: ComponentFixture<IpdDueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdDueListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdDueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
