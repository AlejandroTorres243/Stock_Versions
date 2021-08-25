import { Component, OnInit } from '@angular/core';
import { Productos } from '../dominio/productos';
import { ProductoRestService } from '../servicio/producto-rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-formulario-producto-editar',
  templateUrl: './formulario-producto-editar.component.html',
  styleUrls: ['./formulario-producto-editar.component.css']
})
export class FormularioProductoEditarComponent implements OnInit {

  productoEditar: Productos = new Productos();

  constructor(public servicio: ProductoRestService, public router: Router,public route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((parametro)=>{
      
      this.servicio.buscarUno(parametro.get("id")).subscribe((datos)=>{
        this.productoEditar = datos;
      })
      
    })

  }

  salvar(){
    this.servicio.actualizar(this.productoEditar).pipe(flatMap(res => this.servicio.buscarTodos()))
    .subscribe(()=>{
      this.router.navigate(['/lista']);
    });
  }

}
