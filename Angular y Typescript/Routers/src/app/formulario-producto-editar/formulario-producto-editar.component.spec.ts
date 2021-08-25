import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProductoEditarComponent } from './formulario-producto-editar.component';

describe('FormularioProductoEditarComponent', () => {
  let component: FormularioProductoEditarComponent;
  let fixture: ComponentFixture<FormularioProductoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioProductoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProductoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
