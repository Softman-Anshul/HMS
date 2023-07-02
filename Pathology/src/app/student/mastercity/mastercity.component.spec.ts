import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastercityComponent } from './mastercity.component';

describe('MastercityComponent', () => {
  let component: MastercityComponent;
  let fixture: ComponentFixture<MastercityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastercityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastercityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
