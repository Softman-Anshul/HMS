import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpdlistComponent } from './OPD-List.component';

describe('OpdlistComponent', () => {
  let component: OpdlistComponent;
  let fixture: ComponentFixture<OpdlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
