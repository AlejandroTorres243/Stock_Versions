import { Module } from '@nestjs/common';
import { LibroService } from './libro/libro.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './libro.entity';
import { LibroController } from './libro/libro.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Libro])],
  providers: [LibroService],
  controllers:[LibroController]
})
export class LibroModule {}
