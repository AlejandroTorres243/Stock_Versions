import { Component, OnInit } from '@angular/core';
import {Libro} from "../../../models/libro";
import {ActivatedRoute, Router} from "@angular/router";
import {LibrosService} from "../../../services/libros-api.service";

@Component({
  selector: 'app-edit-libros',
  templateUrl: './edit-libros.component.html',
  styleUrls: ['./edit-libros.component.sass']
})
export class EditLibrosComponent implements OnInit {

  _id;
  modelo: Libro;
  constructor(private route: ActivatedRoute,
              private router: Router,
              public librosService: LibrosService) {
    this.modelo = new Libro();
    this.route.params.subscribe((data) => {
      this._id = data.id;
      this.librosService.getLibroByID(this._id).subscribe((data)=>{
            console.log(data);
            this.modelo=data.libro;
          }
      );
    });
    console.log(this._id);
  }

  ngOnInit() {
  }

  save() {
    // console.log(this.modelo);
    // TODO: LLamar al API REST para guardar el dato
    this.modelo._id = this._id;
    this.librosService.editLibro(this._id,this.modelo).subscribe((data)=>{
       console.log(data);
      // Volver al listado o al Detalle
      this.router.navigate(['/libros']);
    });

  }

  volver() {
    this.router.navigate(['/libros']);
  }

}
