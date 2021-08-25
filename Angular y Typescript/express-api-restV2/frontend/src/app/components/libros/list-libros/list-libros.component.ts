import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {LibrosService} from '../../../services/libros-api.service';
import {Libro} from '../../../models/libro';
import {ConfirmDeleteLibrosComponent} from "../confirm-delete-libros/confirm-delete-libros.component";

@Component({
  selector: 'app-list-libros',
  templateUrl: './list-libros.component.html',
  styleUrls: ['./list-libros.component.sass']
})
export class ListLibrosComponent {
  displayedColumns = ['_id', 'titulo', 'autor', 'isbn', 'actions'];
  dataSource: MatTableDataSource<Libro>;
  librosResponse = null;
  cargandoOculto = true;
  libros;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
      private librosService: LibrosService,
      private router: Router,
      public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource([]);
    this.actualiza();
  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  createItem() {
    this.router.navigate(['/libros/add']);
  }
  showItem(row) {
    console.log(row);
    this.router.navigate(['/libros/' + row._id]);
  }
  editItem(row) {
    this.router.navigate(['/libros/edit/' + row._id]);
    console.log(row);
  }
  deleteItem(row) {
    this.borra(row._id);
    let dialogRef = this.dialog.open(ConfirmDeleteLibrosComponent, {
      width: '600px',
      data: 'This text is passed into the dialog!'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      if(result=='Confirm'){
        this.librosService.deleteLibro(row._id).subscribe((data)=>{
          this.actualiza();
        });
      }else{
        console.log("Borrado cancelado");
      }
    });
  }
  actualiza() {
    console.log("actualiza");
    this.cargandoOculto = false;
    this.librosResponse = this.librosService.getData();
    this.librosResponse.subscribe((data) => {
      this.cargandoOculto = true;
      this.libros=data.libros;
      this.dataSource = new MatTableDataSource(data.libros);
      // console.log(this.libros);
    });
  }
  borra(id) {
    const respuestaObserver = this.librosService.deleteLibro(id);
    respuestaObserver.subscribe((data) => {
      console.log(data);
      this.actualiza();
    });
  }

}
