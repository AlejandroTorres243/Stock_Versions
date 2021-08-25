import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-hola5',
  templateUrl: './hola5.component.html',
  styleUrls: ['./hola5.component.css']
})
export class Hola5Component implements OnInit {

  listaPersonas: Persona[]=[];
  seleccionada: Persona;
  public informatico: boolean;

  constructor() {

    this.seleccionada={} as Persona;
    this.listaPersonas.push(new Persona("pepe", "perez",25, false));
    this.listaPersonas.push(new Persona("Juan", "sanchez", 45, true));

  }

  ngOnInit() {
  }

  selecciona(unaPersona: Persona): void{

    this.seleccionada = unaPersona;

  }

  add(){

    let personaNueva: Persona = new Persona("Alex", "Fandiño", 20);

    this.listaPersonas.push(personaNueva);
  }

  borrar(){

    let indicePersona: number = this.listaPersonas.indexOf(this.seleccionada);

    this.listaPersonas.splice(indicePersona, 1);

  }

}
