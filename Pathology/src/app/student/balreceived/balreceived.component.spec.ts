import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalreceivedComponent } from './balreceived.component';

describe('BalreceivedComponent', () => {
  let component: BalreceivedComponent;
  let fixture: ComponentFixture<BalreceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalreceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalreceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
