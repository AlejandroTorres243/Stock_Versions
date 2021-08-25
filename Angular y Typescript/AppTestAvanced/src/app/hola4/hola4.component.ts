import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola4',
  templateUrl: './hola4.component.html',
  styleUrls: ['./hola4.component.css']
})

export class Hola4Component implements OnInit {

  mostrar:boolean =true;

  constructor() {
    
  }

  ngOnInit() {
  }

  mostrar1(){
    this.mostrar = true;
  }

  ocultar1(){
    this.mostrar = false;
  }

}
