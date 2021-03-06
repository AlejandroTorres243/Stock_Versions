import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from '../../servicios/jwt-token.service';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';
import { Cuenta } from '../../dominio/cuenta';
import { $ } from 'protractor';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  usuario:Cuenta = new Cuenta();
  message: string = "";
  password2: string = "";

  ngOnInit() {
    
    this.message = "";
    
  }

  register(usuario: Cuenta){
    
    if (this.password2 == usuario.password) {
      this.loginService.register(usuario).subscribe(()=>{
        this.router.navigateByUrl("/inicioSesion");
        window.location.reload();
      });
    } else {
      this.message = " * Las contraseñas no son identicas";
      
    }

  }

}
