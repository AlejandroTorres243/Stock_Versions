import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { TodosComponent } from './components/todos/todos.component';
import {TodoService} from './services/todo.service';
// import {LibrosService} from './services/libros.service';
import {AngularImportsModule} from './angular-imports/angular-imports.module';
import {LibrosService} from './services/libros-api.service';
import { ListLibroComponent } from './components/libros/list-libro/list-libro.component';
import { ListLibrosComponent } from './components/libros/list-libros/list-libros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddLibrosComponent } from './components/libros/add-libros/add-libros.component';
import { DetailLibrosComponent } from './components/libros/detail-libros/detail-libros.component';
import { EditLibrosComponent } from './components/libros/edit-libros/edit-libros.component';
import { ConfirmDeleteLibrosComponent } from './components/libros/confirm-delete-libros/confirm-delete-libros.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ListLibroComponent,
    ListLibrosComponent,
    PageNotFoundComponent,
    AddLibrosComponent,
    DetailLibrosComponent,
    EditLibrosComponent,
    ConfirmDeleteLibrosComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularImportsModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoService,
    LibrosService,
    { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
