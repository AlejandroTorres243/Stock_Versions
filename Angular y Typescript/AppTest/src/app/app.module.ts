import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hola1Component } from './hola1/hola1.component';
import { Hola2Component } from './hola2/hola2.component';
import { Hola3Component } from './hola3/hola3.component';
import { Hola4Component } from './hola4/hola4.component';
import { Hola5Component } from './hola5/hola5.component';
import { VistaPersonasComponent } from './vista-personas/vista-personas.component';
import { PruebaAlexComponent } from './prueba-alex/prueba-alex.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Hola1Component,
    Hola2Component,
    Hola3Component,
    Hola4Component,
    Hola5Component,
    VistaPersonasComponent,
    PruebaAlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
