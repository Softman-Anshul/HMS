import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdRegEditComponent } from './ipd-reg-edit.component';

describe('IpdRegEditComponent', () => {
  let component: IpdRegEditComponent;
  let fixture: ComponentFixture<IpdRegEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdRegEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdRegEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
