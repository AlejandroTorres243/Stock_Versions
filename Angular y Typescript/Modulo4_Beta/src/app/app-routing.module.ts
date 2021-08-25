import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';


const routes: Routes = [

  {path:"", redirectTo:"/lista", pathMatch:"full"}, //EJEMPLO DE PAG POR DEFECTO
  {path:"lista", component:ListaUsuarioComponent},
  {path:"registro", component:RegistroUsuarioComponent},
  {path:"login", component:LoginUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
