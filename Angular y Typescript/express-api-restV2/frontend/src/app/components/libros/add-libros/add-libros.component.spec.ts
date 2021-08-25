import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLibrosComponent } from './add-libros.component';

describe('AddLibrosComponent', () => {
  let component: AddLibrosComponent;
  let fixture: ComponentFixture<AddLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
