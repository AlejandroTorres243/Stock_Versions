import { Injectable } from '@angular/core';
import { Usuario } from '../dominio/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  lista: Usuario[] = [];

  constructor() { 
  }

  public buscarTodos(){
    return this.lista;
  }

  public borrar(objeto: Usuario):void{

    let inicio = this.lista.indexOf(objeto);
    this.lista.splice(inicio,1);

  }

  public insertar(objeto: Usuario):void{
    this.lista.push(objeto);
 }

}
