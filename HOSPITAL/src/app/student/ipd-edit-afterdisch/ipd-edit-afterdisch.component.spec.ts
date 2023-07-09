import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdEditAfterdischComponent } from './ipd-edit-afterdisch.component';

describe('IpdEditAfterdischComponent', () => {
  let component: IpdEditAfterdischComponent;
  let fixture: ComponentFixture<IpdEditAfterdischComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdEditAfterdischComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdEditAfterdischComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
