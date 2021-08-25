import { Injectable } from '@nestjs/common';
import { Libro } from '../libro.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class LibroService {
    constructor(@InjectRepository(Libro)private readonly libroRepository: Repository<Libro>){}
    
    findAll():Promise<Libro[]>{
            return this.libroRepository.find();
    }

    save(libro:Libro):Promise<Libro>{
        return this.libroRepository.save(libro);
    }

    async findById(id: number):Promise<Libro>{
        return this.libroRepository.findOne(id);
    }

    async delete(id:number):Promise<Libro>{
        const promesaObjeto=await this.libroRepository.findOne(id);
        return this.libroRepository.remove(promesaObjeto);
    }
}
