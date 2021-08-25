import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../dominio/usuario';
import { HttpClient } from '@angular/common/http';
import { RestGenericService } from './rest-generic.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService extends RestGenericService<Usuario, String>{

  constructor(public http: HttpClient) { 

    super("usuario","id",http);

  }

  public buscarPorConcepto(concepto:string):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}/filtro/${concepto}`);
  }

//  public buscarTodos(): Observable<Usuario[]>{
//    return this.http.get<Usuario[]>("http://localhost:3000/usuario");
//  }
//LUEGO DE CREAR EL VINCULO EN EL SERVICIO LUEGO SE TENDRA QUE CREAR LA FUNCION EN LA LISTA DE USUARIOS
//  public borrar(usuario:Usuario): Observable<Usuario>{
//    return this.http.delete<Usuario>(`http://localhost:3000/usuario/${usuario.id}`);
//  }

}
