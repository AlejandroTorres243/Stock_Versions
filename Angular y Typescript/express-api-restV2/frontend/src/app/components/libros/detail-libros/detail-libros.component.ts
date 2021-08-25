import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LibrosService} from "../../../services/libros-api.service";
import {Libro} from "../../../models/libro";
@Component({
  selector: 'app-detail-libros',
  templateUrl: './detail-libros.component.html',
  styleUrls: ['./detail-libros.component.sass']
})
export class DetailLibrosComponent implements OnInit {

  _id;
  libro: Libro;
  constructor(private route: ActivatedRoute,
              private router: Router,
              public librosService: LibrosService) {
    this.libro = new Libro();
    this.route.params.subscribe((data) => {
      this._id = data.id;
      this.librosService.getLibroByID(this._id).subscribe((data)=>{
        console.log(data);
            this.libro=data.libro;
          }
      );
    });
    console.log(this._id);
  }
  volver() {
    this.router.navigate(['/libros']);
  }

  ngOnInit() {
  }

  editar() {
    this.router.navigate(['/libros/edit/'+this.libro._id]);
  }

  borrar() {

  }
}
