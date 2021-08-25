import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDriverComponent } from './date-driver.component';

describe('DateDriverComponent', () => {
  let component: DateDriverComponent;
  let fixture: ComponentFixture<DateDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
