import { Injectable } from '@angular/core';
import { Usuario } from '../dominio/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>("http://localhost:3000/login",usuario);
  }

  public registro():Observable<Usuario>{
    return this.http.get<Usuario>("http://localhost:3000/registro");
  }

}
