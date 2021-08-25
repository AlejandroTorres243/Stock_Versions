import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  lista: string[] = ["España","Portugal","Reino Unido", "Francia"];
  seleccion: string;

  constructor() { }

  ngOnInit() {
  }

}
