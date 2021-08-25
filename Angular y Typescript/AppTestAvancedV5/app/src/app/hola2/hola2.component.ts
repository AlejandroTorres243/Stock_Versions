import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-hola2',
  templateUrl: './hola2.component.html',
  styleUrls: ['./hola2.component.css']
})
export class Hola2Component implements OnInit {

  persona: Persona;

  constructor() {

    this.persona = new Persona("Pepe", "Alvarez", 23);

   }

  ngOnInit() {
  }

}
