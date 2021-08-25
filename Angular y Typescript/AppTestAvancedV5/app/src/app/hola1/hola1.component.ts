import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

  nombre: string;
  miimagen: string;
  contador: number = 0;
  ancho: number = 700;

  constructor() { 

    this.nombre="Pepe";
    this.miimagen= "assets/miimagen.jpg";

  }

  public incrementar(): void {

    this.contador++;

  }

  public decrementar(): void {

    this.contador--;

  }

  public pulsaste(){
    alert("has pulsado");
  }

  ngOnInit() {
  }

}
