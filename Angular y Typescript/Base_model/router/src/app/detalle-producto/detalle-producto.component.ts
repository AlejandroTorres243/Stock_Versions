import { Component, OnInit } from '@angular/core';
import { ProductoRestService } from '../servicio/producto-rest.service';
import { Productos } from '../dominio/productos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto:Productos;

  constructor(public servicio: ProductoRestService, public route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((parametro)=>{
      
      this.servicio.buscarUno(parametro.get("id")).subscribe((datos)=>{
        this.producto = datos;
      })
      
    })

  }



}
