import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  url: String = "assets/imagen.jpg";
  contador: number = 0;
  sujeto: Persona;
  listaPersonas: Persona[] = [];
  boton: boolean;

  constructor() { }

  ngOnInit() {

    this.sujeto = new Persona("Manuel","Higueras",23);

    this.listaPersonas.push(new Persona("Manuel","Higueras", 23), new Persona("Andrea", "Maturino", 21));


  }

  /* Metodos de los eventos */

  incrementa(){

    this.contador++;

  }

  decrementa(){

    this.contador--;

  }

  mostrar(){
    this.boton = true;
  }

  ocultar(){
    this.boton = false;
  }

}
