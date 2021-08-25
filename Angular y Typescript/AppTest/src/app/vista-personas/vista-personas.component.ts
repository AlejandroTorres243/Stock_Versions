import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-vista-personas',
  templateUrl: './vista-personas.component.html',
  styleUrls: ['./vista-personas.component.css']
})
export class VistaPersonasComponent implements OnInit {

  personaNueva: Persona ={} as Persona; // Persona nueva vacio sin utilizar parametros
  listaPersonas: Persona[];
  filtroNombre: string = "";

  /*
  get lista(): Persona[]{

    if (this.filtroNombre == "") {
      return this.listaPersonas;
    } else {
      return this.listaPersonas.filter((p)=>p.nombre.startsWith(this.filtroNombre));
    }

  }
  set lista(value: Persona[]){
    this.listaPersonas = value;
  }
  */
  constructor(private personasService:PersonasService) {

  }

  ngOnInit() {
    this.personasService.buscarTodas().then((datos)=> {
      this.listaPersonas=datos as Persona[];
    });
  }

  insertar(){

    this.personasService.insertar(this.personaNueva);
  }

  borrar(personaBorrar: Persona){

    this.personasService.borrar(personaBorrar);
  }

}
