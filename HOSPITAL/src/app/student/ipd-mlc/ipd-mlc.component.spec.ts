import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdMlcComponent } from './ipd-mlc.component';

describe('IpdMlcComponent', () => {
  let component: IpdMlcComponent;
  let fixture: ComponentFixture<IpdMlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdMlcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdMlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
