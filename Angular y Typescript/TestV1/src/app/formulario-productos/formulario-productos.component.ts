import { Component, OnInit } from '@angular/core';
import { Productos } from '../dominio/productos';
import { ProductoRestService } from '../servicio/producto-rest.service';
import { flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent implements OnInit {

  productoInsertar: Productos;

  constructor(public servicio: ProductoRestService, public router: Router) { 
    this.productoInsertar = new Productos(0,null,null,null);
  }

  ngOnInit() {
  }

  insertar(objeto:Productos){
    this.servicio.insertar(objeto)
    .subscribe(()=>{
      this.router.navigate(['/lista']);
    });
  }

}
