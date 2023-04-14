import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdFileDocumentComponent } from './ipd-file-document.component';

describe('IpdFileDocumentComponent', () => {
  let component: IpdFileDocumentComponent;
  let fixture: ComponentFixture<IpdFileDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdFileDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdFileDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
