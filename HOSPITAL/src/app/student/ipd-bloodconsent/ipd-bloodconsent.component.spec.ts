import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdBloodconsentComponent } from './ipd-bloodconsent.component';

describe('IpdBloodconsentComponent', () => {
  let component: IpdBloodconsentComponent;
  let fixture: ComponentFixture<IpdBloodconsentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpdBloodconsentComponent]
    });
    fixture = TestBed.createComponent(IpdBloodconsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
