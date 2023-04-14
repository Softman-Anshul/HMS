import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisccertificateLAMAComponent } from './disccertificate-lama.component';

describe('DisccertificateLAMAComponent', () => {
  let component: DisccertificateLAMAComponent;
  let fixture: ComponentFixture<DisccertificateLAMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisccertificateLAMAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisccertificateLAMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
