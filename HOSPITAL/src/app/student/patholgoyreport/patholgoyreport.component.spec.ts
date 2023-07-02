import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatholgoyreportComponent } from './patholgoyreport.component';

describe('PatholgoyreportComponent', () => {
  let component: PatholgoyreportComponent;
  let fixture: ComponentFixture<PatholgoyreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatholgoyreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatholgoyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
