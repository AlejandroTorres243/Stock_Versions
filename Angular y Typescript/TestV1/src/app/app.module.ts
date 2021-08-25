import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { AppRoutingModule } from './app-routing.module';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { FormularioProductoEditarComponent } from './formulario-producto-editar/formulario-producto-editar.component';
import { ErrorComponent } from './error/error.component';
import { IvaPipe } from './iva.pipe';
import { FilaProductoComponent } from './fila-producto/fila-producto.component';
import { LoginComponent } from './login/login.component';
import { JwTokenService } from './servicio/jw-token.service';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

//OPCIONES PARA EL HTTPCLIENT TOKEN

export function jwtOptionsFactory(tokenService) {
  return {
    tokenGetter: () => {
      return tokenService.token;
    },
    whitelistedDomains: ["localhost:3000"],
    blacklistedRoutes: ["localhost:3000/login"]
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    FormularioProductosComponent,
    DetalleProductoComponent,
    FormularioProductoEditarComponent,
    ErrorComponent,
    IvaPipe,
    FilaProductoComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({ //OPCIONES PARA EL HTTPCLIENT TOKEN--------------|
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [JwTokenService]
      }
    }) //-----------------------------OPCIONES PARA EL HTTPCLIENT TOKEN---|
  ],
  providers: [JwTokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
