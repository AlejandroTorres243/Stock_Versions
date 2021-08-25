import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LibroService } from './libro.service';
import { Libro } from '../libro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('libro')
export class LibroController {
constructor(private readonly libroService: LibroService){

}

    @Get()
    findAll():Promise<Libro[]>{
        return this.libroService.findAll();
    }

    

    @Post()
    create(@Body() libro :Libro):Promise<Libro>{
        return this.libroService.save(libro);
    }
    @Get(':id')
    findById(@Param() id : number):Promise<Libro>{
        return this.libroService.findById(id);
    }

    @Put(':id')
    async modifyById(@Param()id:number,@Body()libro:Libro):Promise<Libro>{
        let libroEncontrado=await this.libroService.findById(id);
        
        libroEncontrado.titulo=libro.titulo;
        libroEncontrado.autor=libro.autor;
        libroEncontrado.fechaLanzamiento=libro.fechaLanzamiento;
        return this.libroService.save(libroEncontrado);
    }

    @Delete(":id")
    async borrarPorId(@Param()id :number):Promise<Libro>{
        return this.libroService.delete(id);

    }
}
