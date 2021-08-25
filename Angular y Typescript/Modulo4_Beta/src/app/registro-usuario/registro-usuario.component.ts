import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicio/usuario.service';
import { Usuario } from '../dominio/usuario';
import { UsuarioRestService } from '../servicio/usuario-rest.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuarioRegistro: Usuario;

  constructor(public servicio: UsuarioRestService, public router:Router) {

    this.usuarioRegistro = new Usuario(null,null,null,null,null);

  }

  ngOnInit() {
  }

  registrar(objeto:Usuario){
    this.servicio.insertar(objeto)
    .subscribe(()=>{
      this.router.navigate(['/lista']);
    });
  }

}
