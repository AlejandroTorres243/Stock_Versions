import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//GENERANDO LOS ACCESOS GENERICOS DEL SERVIDOR

export class RestGenericService <T,K> {

  private servidor: string = "http://localhost:3000";

  constructor(public endPoint:string, public id:K, public http:HttpClient) { }

  //Genero una url que me permita
  //dar de alta un servicio de X cosas ----> X = (productos)
  get url() {
    return `${this.servidor}/${this.endPoint}`;
  }

  public buscarTodos():Observable<T[]>{
    return this.http.get<T[]>(this.url);
  }

public insertar(tipo:T):Observable<T>{
  return this.http.post<T>(this.url,tipo);
}

//Aqui el busca, el puerto del producto
//Ejemplo: http://localhost:3000/productos/id


public borrar(tipo:T):Observable<T>{
  return this.http.delete<T>(`${this.url}/${tipo[`${this.id}`]}`);
}

  public actualizar(tipo:T): Observable<T>{
    return this.http.put<T>(`${this.url}/${tipo[`${this.id}`]}`,tipo);
  }

  public buscarUno(id:K):Observable<T>{
    return this.http.get<T>(`${this.url}/${id}`);
  }

}
