import { Injectable } from '@angular/core';
import { Productos } from '../dominio/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  lista: Productos[] = [];

  constructor() { 
    this.lista.push(new Productos(1,"telefono","300"), new Productos(2,"ordenador","770"))
    this.lista.push(new Productos(3,"coche","2100"), new Productos(4,"piso","45.100"))
  }

  public buscarTodos(){
    return this.lista;
  }

  public borrar(objeto: Productos):void{

    let inicio = this.lista.indexOf(objeto);
    this.lista.splice(inicio,1);

  }

  public insertar(objeto: Productos):void{
    this.lista.push(objeto);
 }

}
