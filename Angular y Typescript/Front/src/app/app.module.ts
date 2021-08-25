import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProductoDetallesComponent } from './components/producto-detalles/producto-detalles.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { JwtTokenService } from './servicios/jwt-token.service';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AuthService } from './servicios/auth.service';
import { AuthInterceptor } from './auth-interceptor';
import { LogoutComponent } from './components/logout/logout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { EdicionUsuariosComponent } from './components/edicion-usuarios/edicion-usuarios.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

export function jwtOptionsFactory(tokenService: JwtTokenService) {
  return {
    tokenGetter: () => {
      return tokenService.token;
    },
    whitelistedDomains: ["localhost:3000"],
    blacklistedRouters: ["localhost:3000/login"]
  }
}

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    ContactoComponent,
    PerfilComponent,
    ProductoDetallesComponent,
    RegistroComponent,
    InicioSesionComponent,
    AuthComponentComponent,
    LogoutComponent,
    ListaUsuariosComponent,
    EdicionUsuariosComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [JwtTokenService]
      }
    }),
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [JwtTokenService, AuthService,
    
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
