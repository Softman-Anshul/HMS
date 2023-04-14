import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdReportreceivedComponent } from './ipd-reportreceived.component';

describe('IpdReportreceivedComponent', () => {
  let component: IpdReportreceivedComponent;
  let fixture: ComponentFixture<IpdReportreceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdReportreceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdReportreceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
