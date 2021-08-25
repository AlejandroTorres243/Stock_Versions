import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaCheckVox } from '../persona-check-vox';

@Component({
  selector: 'app-date-driver-binding-check-box',
  templateUrl: './date-driver-binding-check-box.component.html',
  styleUrls: ['./date-driver-binding-check-box.component.css']
})
export class DateDriverBindingCheckBoxComponent implements OnInit {
 
  selector: PersonaCheckVox;
  listaPersonas: PersonaCheckVox[] = [];

  constructor() { }

  ngOnInit() {

    this.listaPersonas.push(new PersonaCheckVox("Manuel","Higueras", 23, true), new PersonaCheckVox("Andrea", "Maturino", 21, false));
    this.listaPersonas.push(new PersonaCheckVox("Antoni","Panini", 51, false), new PersonaCheckVox("Maria", "Lopez", 32, true));

  }

  seleccionado(unaPersona: PersonaCheckVox){
    
    this.selector = unaPersona;

  }

}
