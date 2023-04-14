import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplebillComponent } from './samplebill.component';

describe('SamplebillComponent', () => {
  let component: SamplebillComponent;
  let fixture: ComponentFixture<SamplebillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplebillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
