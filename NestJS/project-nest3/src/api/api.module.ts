import { Module } from '@nestjs/common';
import { CarroController } from './controllers/carro.controller';
import { CarroService } from './servicio/carro.service';
import { Carro } from './models/carro.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Carro])],
  controllers: [CarroController],
  providers: [CarroService]
})
export class ApiModule {}
