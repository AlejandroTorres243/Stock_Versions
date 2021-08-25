import { Component, OnInit } from '@angular/core';
import { Usuario } from '../dominio/usuario';
import { LoginService } from '../servicio/login.service';
import { Router } from '@angular/router';
import { JwTokenService } from '../servicio/jw-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

}
