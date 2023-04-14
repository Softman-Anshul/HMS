import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDDisccertificateComponent } from './ipd-disccertificate.component';

describe('IPDDisccertificateComponent', () => {
  let component: IPDDisccertificateComponent;
  let fixture: ComponentFixture<IPDDisccertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDDisccertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDDisccertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
