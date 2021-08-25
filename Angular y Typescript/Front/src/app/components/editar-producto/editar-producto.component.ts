import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/dominio/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  productoEditar: Producto = new Producto();

  constructor(public servicio: ProductosService,public router: Router,public route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((parametro)=>{
      
      this.servicio.buscarUno(parametro.get('producto')).subscribe((datos)=>{
        this.productoEditar = datos;
      })
      
    })

  }

  salvar(){
    this.servicio.actualizar(this.productoEditar).pipe(flatMap(res => this.servicio.getProductos()))
    .subscribe(()=>{
      this.router.navigate(['/lista']);
    });
  }

}
