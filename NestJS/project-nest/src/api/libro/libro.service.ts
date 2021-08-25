import { Injectable } from '@nestjs/common';
import { Libro } from '../models/libro';

@Injectable()
export class LibroService {
    public libro: Libro[] = [{id:1,titulo:"untitulo",autor:"manuel"}];
    getListaLibros(): Libro[] {
      return this.libro;
    }
}
