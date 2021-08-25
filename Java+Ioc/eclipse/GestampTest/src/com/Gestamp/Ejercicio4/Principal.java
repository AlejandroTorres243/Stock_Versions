package com.Gestamp.Ejercicio4;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Persona sujeto = new Persona("Juan", 30);
		Telefono objetoA = new Telefono("Vodafone", 671572371);
		
		sujeto.setTelefono(objetoA);
		
		System.out.println(sujeto.getNombre());
		System.out.println(sujeto.getEdad());
		System.out.println(sujeto.getTelefono().getNumero());
		
		Telefono objetoB = sujeto.getTelefono();
		
		System.out.println("\n" + objetoB.getNumero());
		System.out.println(objetoB.getOperador());
		
	}

}
