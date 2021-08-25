package com.gestamp.hybrid.Polimorfismo;

public class Deportista extends Persona {

	public Deportista(String nombre) {
		super(nombre);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void andar() {
		// TODO Auto-generated method stub
		System.out.println("El deportista va a 10km");
	}
	
	
	
}
