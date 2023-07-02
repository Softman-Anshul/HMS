import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTestreportComponent } from './print-testreport.component';

describe('PrintTestreportComponent', () => {
  let component: PrintTestreportComponent;
  let fixture: ComponentFixture<PrintTestreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintTestreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintTestreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
