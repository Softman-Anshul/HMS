import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdPackageinformationComponent } from './ipd-packageinformation.component';

describe('IpdPackageinformationComponent', () => {
  let component: IpdPackageinformationComponent;
  let fixture: ComponentFixture<IpdPackageinformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpdPackageinformationComponent]
    });
    fixture = TestBed.createComponent(IpdPackageinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
