import { Injectable } from '@nestjs/common';
import { Carro } from '../models/carro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarroService {
    constructor(
        @InjectRepository(Carro)
        private readonly carroRepository: Repository<Carro>,
    ) { }
    
    findAll(): Promise<Carro[]> {
        return this.carroRepository.find();
    }

    save(carro: Carro): Promise<Carro> {
        return this.carroRepository.save(carro);
    }
    findById(id: number): Promise<Carro> {
        return this.carroRepository.findOne(id);
    }
    async delete(id: number): Promise<Carro> {
        const promesaObjeto = await this.carroRepository.findOne(id);
        return this.carroRepository.remove(promesaObjeto);
    }
}
