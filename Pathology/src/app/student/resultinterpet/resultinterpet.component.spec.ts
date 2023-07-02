import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultinterpetComponent } from './resultinterpet.component';

describe('ResultinterpetComponent', () => {
  let component: ResultinterpetComponent;
  let fixture: ComponentFixture<ResultinterpetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultinterpetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultinterpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
