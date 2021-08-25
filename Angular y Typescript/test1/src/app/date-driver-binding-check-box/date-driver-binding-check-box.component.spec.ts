import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDriverBindingCheckBoxComponent } from './date-driver-binding-check-box.component';

describe('DateDriverBindingCheckBoxComponent', () => {
  let component: DateDriverBindingCheckBoxComponent;
  let fixture: ComponentFixture<DateDriverBindingCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDriverBindingCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDriverBindingCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
