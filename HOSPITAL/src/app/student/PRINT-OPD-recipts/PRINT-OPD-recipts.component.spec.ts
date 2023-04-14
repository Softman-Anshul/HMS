import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdreciptsComponent } from './PRINT-OPD-recipts.component';

describe('OpdreciptsComponent', () => {
  let component: OpdreciptsComponent;
  let fixture: ComponentFixture<OpdreciptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdreciptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdreciptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
