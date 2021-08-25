import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductoDetallesComponent } from './components/producto-detalles/producto-detalles.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AutenticacionGuard } from './dominio/autenticacion.guard';
import { LogoutComponent } from './components/logout/logout.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { EdicionUsuariosComponent } from './components/edicion-usuarios/edicion-usuarios.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';


const routes: Routes = [
  { path: "", component: InicioComponent },
  {path: "inicio", component: InicioComponent},
  {path: "productos", component: ProductosComponent, /* canActivate : [AutenticacionGuard] */},
  {path: "contacto", component: ContactoComponent, /* canActivate : [AutenticacionGuard] */},
  {path: "productoDetalles/:id", component: ProductoDetallesComponent, /* canActivate : [AutenticacionGuard] */},
  {path: "inicioSesion", component: InicioSesionComponent},
  {path: "registro", component: RegistroComponent},
  {path: "logout", component: LogoutComponent},
  {path: "listaUsuarios", component: ListaUsuariosComponent},
  {path: "edicionUsuario/:id", component: EdicionUsuariosComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "crearProducto", component: CrearProductoComponent},
  {path: "editarProducto/:id", component: EditarProductoComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
