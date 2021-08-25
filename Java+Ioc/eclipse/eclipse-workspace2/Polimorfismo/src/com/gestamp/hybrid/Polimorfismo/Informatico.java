package com.gestamp.hybrid.Polimorfismo;

public class Informatico extends Persona {

	public Informatico(String nombre) {
		
		super(nombre);
	}

	@Override
	public void andar() {
		// TODO Auto-generated method stub
		System.out.println("El info anda a 3km");
	}
	
	
	
}
