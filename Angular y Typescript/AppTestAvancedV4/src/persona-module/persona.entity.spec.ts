import { Persona } from './persona.entity';

describe('PersonaSchema', () => {
  it('should be defined', () => {
    expect(new Persona()).toBeDefined();
  });
});
