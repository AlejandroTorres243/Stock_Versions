import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { Routes, RouterModule } from '@angular/router';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { FormularioProductoEditarComponent } from './formulario-producto-editar/formulario-producto-editar.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AutenticacionGuard } from './autenticacion.guard';


const routes: Routes = [

  {path:"login", component: LoginComponent},
  {path:"lista", component: ListaProductosComponent, canActivate:[AutenticacionGuard]},
  {path:"formulario", component: FormularioProductosComponent, canActivate:[AutenticacionGuard]},
  {path:"detalle/:id", component: DetalleProductoComponent, canActivate:[AutenticacionGuard]},
  {path:"edicion/:id", component: FormularioProductoEditarComponent, canActivate:[AutenticacionGuard]},
  //{path:"", redirectTo:"/lista", pathMatch:"full"}, //EJEMPLO DE PAG POR DEFECTO
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"error", component: ErrorComponent},//PAGINA DE DIRECCIONAMIENTO DE ERRORES
  {path:"**", redirectTo: "/error", pathMatch: "full"}

];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
