import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Productos } from '../dominio/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoRestService {

  constructor(private http: HttpClient) { }

  public buscarTodos(): Observable<Productos[]>{
    return this.http.get<Productos[]>("http://localhost:3000/productos");
  }

  public buscarPorConcepto(concepto:string):Observable<Productos[]>{
    return this.http.get<Productos[]>(`http://localhost:3000/productos/filtro/${concepto}`);
  }

  public borrar(producto:Productos): Observable<Productos>{
    return this.http.delete<Productos>(`http://localhost:3000/productos/${producto.id}`);
  }

  public insertar(producto:Productos): Observable<Productos>{
    return this.http.post<Productos>("http://localhost:3000/productos",producto);
  }

  public actualizar(producto:Productos): Observable<Productos>{
    return this.http.put<Productos>(`http://localhost:3000/productos/${producto.id}`,producto);
  }

}
