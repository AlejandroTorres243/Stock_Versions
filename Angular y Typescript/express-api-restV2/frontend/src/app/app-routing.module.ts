import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListLibrosComponent} from "./components/libros/list-libros/list-libros.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {AddLibrosComponent} from "./components/libros/add-libros/add-libros.component";
import {DetailLibrosComponent} from "./components/libros/detail-libros/detail-libros.component";
import {EditLibrosComponent} from "./components/libros/edit-libros/edit-libros.component";
import {UploadFormComponent} from "./components/upload-form/upload-form.component";

const routes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ListLibrosComponent },
  { path: 'upload', component: UploadFormComponent },
  { path: 'libros', component: ListLibrosComponent },
  { path: 'libros/add', component: AddLibrosComponent },
  { path: 'libros/:id', component: DetailLibrosComponent },
  { path: 'libros/edit/:id', component: EditLibrosComponent },
// { path: '', redirectTo: '/manage-book ', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
