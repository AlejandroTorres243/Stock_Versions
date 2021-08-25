import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  listaPersonas:Persona[]=[];

  constructor(private httpClient:HttpClient) {


  }

  buscarTodas():Promise<Persona[]>{
    return this.httpClient.get<Persona[]>("http://localhost:3000/personas3").toPromise();
  }

  insertar(persona:Persona): void{
    this.listaPersonas.push(persona);
  }

  borrar(persona:Persona){
    let i = this.listaPersonas.indexOf(persona);

    this.listaPersonas.splice(i, 1);

    
  }

}
