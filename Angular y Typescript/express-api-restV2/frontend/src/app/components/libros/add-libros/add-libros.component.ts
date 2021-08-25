import { Component, OnInit } from '@angular/core';
import {Libro} from '../../../models/libro';
import {LibrosService} from '../../../services/libros-api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-libros',
  templateUrl: './add-libros.component.html',
  styleUrls: ['./add-libros.component.sass']
})
export class AddLibrosComponent implements OnInit {
  modelo: Libro;
  constructor(private route: ActivatedRoute,
              private router: Router,
              public librosService: LibrosService) {
    this.modelo = new Libro();

  }

  ngOnInit() {
  }
  save() {
    // console.log(this.modelo);
    // TODO: LLamar al API REST para guardar el dato
    this.librosService.addLibro(this.modelo).subscribe((data)=>{
      // console.log(data);
      // Volver al listado o al Detalle
      this.router.navigate(['/libros']);
    });

  }

  volver() {
    this.router.navigate(['/libros']);
  }
}
