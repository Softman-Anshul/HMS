import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptsBillComponent } from './Test_recipts-bill.component';

describe('ReciptsBillComponent', () => {
  let component: ReciptsBillComponent;
  let fixture: ComponentFixture<ReciptsBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciptsBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciptsBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
