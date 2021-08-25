import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicio/usuario.service';
import { Usuario } from '../dominio/usuario';
import { UsuarioRestService } from '../servicio/usuario-rest.service';
import { flatMap, map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  lista: Usuario[] = [];

  constructor(public servicio: UsuarioRestService, public router: Router) { 

    //this.lista = servicio.buscarTodos();

  }

  ngOnInit() {
    this.servicio.buscarTodos().subscribe((datos)=>{
      this.lista = datos;
    });
  }

  borrar(objeto:Usuario){
    //llamo al servidor para que pueda eliminar un elemento
    //el pipe me permite encadenar e invocar con la otra funcion, otro observable
    this.servicio.borrar(objeto).pipe(flatMap(res => this.servicio.buscarTodos()))
    .subscribe((dato)=>{
      this.lista=dato;
      console.log("Eliminacion Exitosa");
    });
  }

}
