import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from 'c:/Users/Manuel/Desktop/Exodus/frontend/appTrade/src/app/components/inicio/inicio.component';
import { ProductosComponent } from 'c:/Users/Manuel/Desktop/Exodus/frontend/appTrade/src/app/components/productos/productos.component';
import { ContactoComponent } from 'c:/Users/Manuel/Desktop/Exodus/frontend/appTrade/src/app/components/contacto/contacto.component';
import { ProductoDetallesComponent } from 'c:/Users/Manuel/Desktop/Exodus/frontend/appTrade/src/app/components/producto-detalles/producto-detalles.component';
import { InicioSesionComponent } from 'c:/Users/Manuel/Desktop/Exodus/frontend/appTrade/src/app/components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from 'c:/Users/Manuel/Desktop/Exodus/frontend/appTrade/src/app/components/registro/registro.component';
import { AutenticacionGuard } from '../autenticacion.guard';

//PRUEBA DE MANUEL c:/Users/Manuel/Desktop/ ===

const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "productos", component: ProductosComponent, canActivate : [AutenticacionGuard]},
  {path: "contacto", component: ContactoComponent, canActivate : [AutenticacionGuard]},
  {path: "productoDetalles/:id", component: ProductoDetallesComponent, canActivate : [AutenticacionGuard]},
  {path: "inicioSesion", component: InicioSesionComponent},
  {path: "registro", component: RegistroComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
