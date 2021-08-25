import { Component, OnInit } from '@angular/core';
import { Usuario } from '../dominio/usuario';
import { Router } from '@angular/router';
import { JwTokenService } from '../servicio/jw-token.service';
import { LoginService } from '../servicio/login.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private loginService: LoginService, private router: Router, private jwTokenService: JwTokenService) { }

  ngOnInit() {
  }

  validar(usuario):void{

    //console.log(usuario);
    //se sustituye por una peticion http que nos devuelva un token
    this.loginService.login(usuario).subscribe((datos:any)=>{
      console.log(datos.token);
      this.jwTokenService.token = datos.token;

      this.router.navigate(["lista"]);

    })

  }

  registro():void{
    this.router.navigate(["registro"]);
  }

}
