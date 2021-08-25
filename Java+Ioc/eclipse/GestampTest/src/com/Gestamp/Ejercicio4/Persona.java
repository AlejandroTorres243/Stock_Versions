package com.Gestamp.Ejercicio4;

public class Persona {
	
	private int edad;
	private String nombre;
	
	//Relacion entre persona y telefono
	
	private Telefono telefono;
	
	public Persona(String nombre, int edad) {
		super();
		this.edad = edad;
		this.nombre = nombre;
	}
	
	public int getEdad() {
		return edad;
	}
	public void setEdad(int edad) {
		this.edad = edad;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public Telefono getTelefono() {
		return telefono;
	}
	public void setTelefono(Telefono telefono) {
		this.telefono = telefono;
	}
	
	public void muestraDatoPersona() {
		
		System.out.println("" + getNombre());
		System.out.println();
		
	}
	
}
