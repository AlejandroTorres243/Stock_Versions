import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-alex',
  templateUrl: './prueba-alex.component.html',
  styleUrls: ['./prueba-alex.component.css']
})
export class PruebaAlexComponent implements OnInit {

  numero1: number;
  numero2: number;

  operador: string;

  resultado: number;

  constructor() { }

  ngOnInit() {
  }

  operar(): void{
    console.log("operando");
    
    if (this.operador == "multiplicar") {
      this.resultado = this.numero1 * this.numero2;
    } else {
      this.resultado = this.numero1 / this.numero2;
    }
  }

}
