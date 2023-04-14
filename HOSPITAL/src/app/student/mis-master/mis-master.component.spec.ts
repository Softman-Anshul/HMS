import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisMasterComponent } from './mis-master.component';

describe('MisMasterComponent', () => {
  let component: MisMasterComponent;
  let fixture: ComponentFixture<MisMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
