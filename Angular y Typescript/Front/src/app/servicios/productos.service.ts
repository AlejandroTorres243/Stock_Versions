import { Injectable } from '@angular/core';
import { Producto } from '../dominio/producto';
import { $, promise } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  constructor(private http: HttpClient) {
    
  }

  public getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>("http://localhost:3000/lista");
    
  }

  public borrarProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>("http://localhost:3000/borrarProducto", producto);
  }

  public buscarUno(id:string):Observable<Producto>{
    return this.http.get<Producto>(`http://localhost:3000/producto/${id}`);
  }

  public actualizar(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`http://localhost:3000/producto/`,producto.id);
  }

}
