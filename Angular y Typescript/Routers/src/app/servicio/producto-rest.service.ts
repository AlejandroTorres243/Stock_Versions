import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Productos } from '../dominio/productos';
import { RestGenericService } from './rest-generic.service';

@Injectable({
  providedIn: 'root'
})

//heredaremos de la clase padre (rest-generic-service) las funciones

export class ProductoRestService extends RestGenericService<Productos, String>{

//  constructor(private http: HttpClient) { } CONSTRUCTOR ANTIGUO PARA LAS DEMAS FUNCIONALIDADES

    constructor(public http:HttpClient){

      super("productos","id",http);

    }
  
//  public buscarTodos(): Observable<Productos[]>{
//    return this.http.get<Productos[]>("http://localhost:3000/productos");
//  }

  public buscarPorConcepto(concepto:string):Observable<Productos[]>{
    return this.http.get<Productos[]>(`${this.url}/filtro/${concepto}`);
  }

  //PARA ESTE CASO SE DEBE DE SEGUIR SU ESTRUCTURA ESTANDAR
  //Y DEVOLVER POR UNA CLAVE PRIMARIA, EL ELEMENTO ESPECIFICO

//  public buscarUno(id:string):Observable<Productos>{
//    return this.http.get<Productos>(`${this.url}/detalle/${id}`);
//  }

//  public borrar(producto:Productos): Observable<Productos>{
//    return this.http.delete<Productos>(`http://localhost:3000/productos/${producto.id}`);
//  }

//  public insertar(producto:Productos): Observable<Productos>{
//    return this.http.post<Productos>("http://localhost:3000/productos",producto);
//  }

//  public actualizar(producto:Productos): Observable<Productos>{
//    return this.http.put<Productos>(`http://localhost:3000/productos/${producto.id}`,producto);
//  }

}
