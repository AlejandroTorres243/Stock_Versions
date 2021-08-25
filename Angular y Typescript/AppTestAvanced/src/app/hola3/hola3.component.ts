import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-hola3',
  templateUrl: './hola3.component.html',
  styleUrls: ['./hola3.component.css']
})
export class Hola3Component implements OnInit {

  listaPersonas: Persona[]=[];

  constructor() {

    this.listaPersonas.push(new Persona("pepe", "perez",25));
    this.listaPersonas.push(new Persona("Juan", "sanchez", 45));

  }

  ngOnInit() {
  }

}
