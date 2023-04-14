import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyupdateComponent } from './Control-Keyupdate.component';

describe('KeyupdateComponent', () => {
  let component: KeyupdateComponent;
  let fixture: ComponentFixture<KeyupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
