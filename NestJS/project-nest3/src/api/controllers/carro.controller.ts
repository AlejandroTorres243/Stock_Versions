import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarroService } from '../servicio/carro.service';
import { Carro } from '../models/carro.entity';

@Controller('carro')
export class CarroController {

    constructor(private readonly carroService: CarroService) { }

    @Get()
    findAll(): Promise<Carro[]> {
        return this.carroService.findAll();
    }
    @Post()
    create(@Body() carro: Carro): Promise<Carro> {
        return this.carroService.save(carro);
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Carro> {
        return this.carroService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() carro: Carro): Promise<Carro> {
        await this.carroService.findById(id);
        carro.id = id;
        return this.carroService.save(carro);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<Carro> {
        return this.carroService.delete(id);
    }

}
