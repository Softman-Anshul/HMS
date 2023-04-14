import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupdatabaseComponent } from './Control-Backupdatabase.component';

describe('BackupdatabaseComponent', () => {
  let component: BackupdatabaseComponent;
  let fixture: ComponentFixture<BackupdatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackupdatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackupdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
