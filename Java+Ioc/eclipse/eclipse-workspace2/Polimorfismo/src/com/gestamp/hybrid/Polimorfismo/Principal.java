package com.gestamp.hybrid.Polimorfismo;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Persona x = new Persona("Cecilio");
		x.andar();
		
		Informatico y = new Informatico("Manuel");
		y.andar();
		
		Deportista z = new Deportista("Juan");
		z.andar();
		
		Persona p = new Deportista("132");
		Persona h = new Informatico("Jorge");
	
		
	}

}
