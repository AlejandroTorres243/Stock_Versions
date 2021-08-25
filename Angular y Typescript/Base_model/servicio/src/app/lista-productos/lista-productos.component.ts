import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';
import { Productos } from '../dominio/productos';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  lista: Productos[];
  productoInsertar: Productos;
  productoEditar: Productos;
  filtroConcepto: string = "";

  constructor(public servicio: ProductoService) {

    this.lista = servicio.buscarTodos();
    this.productoInsertar = new Productos(0,null,null);

   }

  ngOnInit() {

  }

  borrar(objeto:Productos){
    this.servicio.borrar(objeto);
  }

  insertar(objeto:Productos){
    this.servicio.insertar(objeto);
  }

  editar(objeto:Productos){
    this.productoEditar = objeto; //SELECCIONA
  }

  salvar(objeto:Productos){
    console.log("has salvado");
    
  }

  //Uso la funcion filter para buscar en toda la lista un elemento
  //y mostrarlo
  get listaFiltrada(){

    if(this.filtroConcepto == "")
      return this.lista;

    else
      return this.lista.filter((p)=>p.concepto.startsWith(this.filtroConcepto));

  }

}
