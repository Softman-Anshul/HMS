import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisccertificateDEATHComponent } from './disccertificate-death.component';

describe('DisccertificateDEATHComponent', () => {
  let component: DisccertificateDEATHComponent;
  let fixture: ComponentFixture<DisccertificateDEATHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisccertificateDEATHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisccertificateDEATHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
