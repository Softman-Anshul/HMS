import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDDischargeCardTemplateComponent } from './ipd-discharge-card-template.component';

describe('IPDDischargeCardTemplateComponent', () => {
  let component: IPDDischargeCardTemplateComponent;
  let fixture: ComponentFixture<IPDDischargeCardTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDDischargeCardTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDDischargeCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
