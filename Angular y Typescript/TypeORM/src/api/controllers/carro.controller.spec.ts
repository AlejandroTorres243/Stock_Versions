import { Test, TestingModule } from '@nestjs/testing';
import { CarroController } from './carro.controller';

describe('Carro Controller', () => {
  let controller: CarroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarroController],
    }).compile();

    controller = module.get<CarroController>(CarroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
