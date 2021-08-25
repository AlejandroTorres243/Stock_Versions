import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-date-driver',
  templateUrl: './date-driver.component.html',
  styleUrls: ['./date-driver.component.css']
})
export class DateDriverComponent implements OnInit {

  selector: Persona;
  listaPersonas: Persona[] = [];

  constructor() { }

  ngOnInit() {

    this.listaPersonas.push(new Persona("Manuel","Higueras", 23), new Persona("Andrea", "Maturino", 21));
    this.listaPersonas.push(new Persona("Antoni","Panini", 51), new Persona("Maria", "Lopez", 32));

  }

  seleccionado(unaPersona: Persona){
    
    this.selector = unaPersona;

  }

  

}
