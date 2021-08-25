import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteLibrosComponent } from './confirm-delete-libros.component';

describe('ConfirmDeleteLibrosComponent', () => {
  let component: ConfirmDeleteLibrosComponent;
  let fixture: ComponentFixture<ConfirmDeleteLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
