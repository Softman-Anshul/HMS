import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultcommentComponent } from './resultcomment.component';

describe('ResultcommentComponent', () => {
  let component: ResultcommentComponent;
  let fixture: ComponentFixture<ResultcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultcommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
