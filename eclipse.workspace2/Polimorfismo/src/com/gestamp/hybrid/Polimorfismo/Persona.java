package com.gestamp.hybrid.Polimorfismo;

public class Persona {
	private String nombre;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Persona(String nombre) {
		super();
		this.nombre = nombre;
	}
	
	public void andar() {
		
		System.out.println("La persona va a 4km");
		
	}
	
	
}
