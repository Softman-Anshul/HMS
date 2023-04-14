import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisccertificateREFFERComponent } from './disccertificate-reffer.component';

describe('DisccertificateREFFERComponent', () => {
  let component: DisccertificateREFFERComponent;
  let fixture: ComponentFixture<DisccertificateREFFERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisccertificateREFFERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisccertificateREFFERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
