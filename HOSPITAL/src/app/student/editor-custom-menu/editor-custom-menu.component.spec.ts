import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorCustomMenuComponent } from './editor-custom-menu.component';

describe('EditorCustomMenuComponent', () => {
  let component: EditorCustomMenuComponent;
  let fixture: ComponentFixture<EditorCustomMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorCustomMenuComponent]
    });
    fixture = TestBed.createComponent(EditorCustomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
