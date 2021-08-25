import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Libro } from 'src/libro-module/libro.entity';

@Controller('api')
export class ApiController {
    constructor(){}
   /* libro1:Libro = {id: 1, titulo: "Titulo1", autor: "OKel", fecha: new Date()};
    libro2:Libro = {id: 2, titulo: "Titulo2", autor: "Cristian", fecha: new Date()};
    libro3:Libro = {id: 3, titulo: "Titulo3", autor: "Jon", fecha: new Date()};
    librosArray:any = [this.libro1, this.libro2, this.libro3];
    
    
    @Get()
    getLibros(): string {
    return this.librosArray;
    }

    @Post('/save')
    postLibros(@Body() libro): Libro {
        console.log(libro);
        
        this.librosArray.push(libro);
        return libro;
    }

    @Get('libro/:id')
    findById(@Param() params) {
    return this.librosArray.find(element => element.id = params);
    }

    @Get('delete/:id')
    deleteById(@Param() params) {
        var index = this.librosArray.findIndex(element => element.id = params);
        this.librosArray.splice(index, 1);
        return 'Deleted';
    }

    @Post('libroEdit/:id')
    ModifyById(@Param('id') id: number, @Body() libro) {
        var index = this.librosArray.findIndex(element => element.id = id);
        this.librosArray[index].id = libro.id;
        this.librosArray[index].titulo = libro.titulo;
        this.librosArray[index].autor = libro.autor;
        this.librosArray[index].fecha = libro.fecha;

        return this.librosArray[index];
    }
    */
}
