package com.gestamp.hybrid.Polimorfismo;

public class FactoriaPersona {

	public static Persona getPersona(String nombre, TipoPersona tipo) {
		
		if(tipo == TipoPersona.Persona)
			return new Informatico(nombre);
		else if(tipo == TipoPersona.Deportista)
			return new Deportista(nombre);
		else 
			return new Persona(nombre);
			
			
			
	}
	
}
