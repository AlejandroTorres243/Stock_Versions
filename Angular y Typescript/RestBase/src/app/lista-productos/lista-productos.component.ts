import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';
import { Productos } from '../dominio/productos';
import { ProductoRestService } from '../servicio/producto-rest.service';
import { flatMap, map } from 'rxjs/operators';
import { Subject, pipe } from 'rxjs';

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
  keyUp = new Subject<KeyboardEvent>();

  constructor(public servicio: ProductoRestService) {

    //this.lista = servicio.buscarTodos();
    this.productoInsertar = new Productos(0,null,null);
    this.keyUp.pipe(map((event:any)=>{
      return event.target.value;
    }))
    .pipe(flatMap((texto)=>{
      return this.servicio.buscarPorConcepto(texto);
    })).subscribe(elemento=>{
       this.lista = elemento;
    })

   }

  ngOnInit() {
    this.servicio.buscarTodos().subscribe((datos)=>{
      this.lista = datos;
    });
  }

  borrar(objeto:Productos){
    //llamo al servidor para que pueda eliminar un elemento
    //el pipe me permite encadenar e invocar con la otra funcion, otro observable
    this.servicio.borrar(objeto).pipe(flatMap(res => this.servicio.buscarTodos()))
    .subscribe((dato)=>{
      this.lista=dato;
      console.log("Eliminacion Exitosa");
    });
  }

  insertar(objeto:Productos){
    this.servicio.insertar(objeto).pipe(flatMap(e => this.servicio.buscarTodos()))
    .subscribe(dato=>{
      this.lista = dato;
    });
  }

  salvar(objeto:Productos){

    this.servicio.actualizar(objeto).pipe(flatMap(res => this.servicio.buscarTodos()))
    .subscribe((dato)=>{
      this.lista=dato;
      console.log("Eliminacion Exitosa");
    });
    
  }

  editar(objeto:Productos){
    this.productoEditar = objeto; //SELECCIONA
  }



  //filtroPorConcepto(evento){
  //  console.log(evento.target.value);
  //}

/*
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
  */
  //Uso la funcion filter para buscar en toda la lista un elemento
  //y mostrarlo
 /* get listaFiltrada(){

    if(this.filtroConcepto == "")
      return this.lista;

    else
      return this.lista.filter((p)=>p.concepto.startsWith(this.filtroConcepto));

  }*/

}
