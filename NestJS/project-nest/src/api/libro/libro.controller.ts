import {  Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { Libro } from '../models/libro';
import { LibroService } from './libro.service';

@Controller('libro')
export class LibroController {

    private libro: Libro[] = [];

/*


    / get listado de libros, devuelve un array de Libro
    / post añadir un libro devuelve un Libro
    /:id get obtener un libro devuelve un Libro
    /:id put modificar un libro devuelve un Libro
    /:id delete borrar un libro devuelve un Libro


*/

constructor(private readonly libroService: LibroService){
    this.libro = this.libroService.getListaLibros();
}

/*


/ get listado de libros, devuelve un array de Libro
/ post añadir un libro devuelve un Libro
/:id get obtener un libro devuelve un Libro
/:id put modificar un libro devuelve un Libro
/:id delete borrar un libro devuelve un Libro


*/
@Get()
getListaCompleta() : Libro[]{
    return this.libro;
}

@Post()
async addLibro(@Body() libro: Libro){
    this.libro.push(libro);
    return libro;
}

@Get(':id')
obtenerLibro(@Param('id') param){
    this.libro.find((l)=>l.id == param.id);
    let posicion = this.libro.findIndex(element => element.id = param);
    return this.libro[posicion];
}

@Put(':id')
modificarLibro(@Param('id') id: number, @Body() nuevoLibro) {
    let posicion = this.libro.findIndex(element => element.id = id);
    this.libro[posicion].titulo = nuevoLibro.titulo;
    this.libro[posicion].autor = nuevoLibro.autor;
    this.libro[posicion].fecha = nuevoLibro.fecha;
    return this.libro[posicion];
}

@Delete(':id')
eliminarLibro(@Param('id') param){
    let posicion = this.libro.find(element => element.id = param);
    console.log(posicion)
    let busqueda = this.libro.indexOf(param.id);
    this.libro.splice(busqueda,1);
    //this.libro = this.libro.slice(posicion+1,1);
}

}
