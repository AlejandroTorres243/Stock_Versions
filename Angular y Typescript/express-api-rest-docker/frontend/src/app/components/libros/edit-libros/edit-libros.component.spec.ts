import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLibrosComponent } from './edit-libros.component';

describe('EditLibrosComponent', () => {
  let component: EditLibrosComponent;
  let fixture: ComponentFixture<EditLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
