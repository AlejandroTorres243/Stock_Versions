package com.gestamp.hybrid.Polimorfismo;

public class Principal2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Persona x = FactoriaPersona.getPersona("juan", TipoPersona.Deportista);
		Persona y = FactoriaPersona.getPersona("luis", TipoPersona.Informatico);
		Persona z = FactoriaPersona.getPersona("manuel", TipoPersona.Persona);
		
		x.andar();
		y.andar();
		z.andar();
		
	}

}
