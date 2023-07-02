import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestratechangeComponent } from './testratechange.component';

describe('TestratechangeComponent', () => {
  let component: TestratechangeComponent;
  let fixture: ComponentFixture<TestratechangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestratechangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestratechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
