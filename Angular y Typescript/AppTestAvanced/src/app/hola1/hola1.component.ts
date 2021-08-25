import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

  nombre;string;
  miimagen:string= "assets/miimagen.png";
  contador: number = 0;

  public incrementar(): void{
    if (this.contador >= 15) {
      
    } else {

      this.contador++;
    }
    
  }

  public decrementar(): void{
    if (this.contador <= 0) {
      
      

    } else {
      
      this.contador--;

    }
  }



  constructor() { 

    this.nombre = "pepe";


  }

  public pulsaste(){
    alert("has pulsado");
  }

  ngOnInit() {
  }

}
