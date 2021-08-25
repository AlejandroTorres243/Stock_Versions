import { Injectable } from '@nestjs/common';
import { Libro } from '../models/libro';

@Injectable()
export class LibroService {

    public libro: Libro [] = [{id: 1, autor: 'loksea', fecha: new Date(), titulo: 'untitulo'}];

    getListaLibros(): Libro[] {
        return this.libro;
    }

}
