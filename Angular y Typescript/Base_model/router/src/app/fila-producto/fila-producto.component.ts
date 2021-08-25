import { Component, OnInit, Input, Output } from '@angular/core';
import { Productos } from '../dominio/productos';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fila-producto',
  templateUrl: './fila-producto.component.html',
  styleUrls: ['./fila-producto.component.css']
})
export class FilaProductoComponent implements OnInit {

  //ESTAS VARIABLES NO PERTENECEN A ESTE COMPONENTE
  //SINO AL PADRE PARA PODER UTILIZAR EL COMANDO @INPUT
  
  @Input() productoEditar: Productos;
  @Input() producto: Productos;

  //AHORA PARA PODER DISPONER DE LAS DEMAS FUNCIONALIDADES

  @Output() eventoBorrar = new EventEmitter<Productos>();
  @Output() eventoDetalle = new EventEmitter<Productos>();
  @Output() eventoEditar = new EventEmitter<Productos>();
  @Output() eventoEditar2 = new EventEmitter<Productos>();
  @Output() eventoSalvar = new EventEmitter<Productos>();
 
  constructor() { }

  ngOnInit() {
  }

  borrar(producto:Productos):void{

    this.eventoBorrar.emit(producto);

  }

  detalle(producto:Productos):void{

    this.eventoDetalle.emit(producto);

  }

  editar(objeto:Productos):void{
    
    this.eventoEditar.emit(objeto);

  }

  editar2(objeto:Productos):void{
    
    this.eventoEditar2.emit(objeto);

  }

  salvar(objeto:Productos):void{

    this.eventoSalvar.emit(objeto);

  }

}
