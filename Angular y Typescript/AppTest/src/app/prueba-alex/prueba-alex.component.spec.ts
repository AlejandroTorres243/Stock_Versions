import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAlexComponent } from './prueba-alex.component';

describe('PruebaAlexComponent', () => {
  let component: PruebaAlexComponent;
  let fixture: ComponentFixture<PruebaAlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaAlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
