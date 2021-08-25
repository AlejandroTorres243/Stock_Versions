package com.Gestamp.Ejercicio5;

import java.util.ArrayList;

public class Principal {

	public static void main(String[] args) {
	
		
		Procesador p= new Procesador("intel",3000);
		DiscoDuro disco= new DiscoDuro("seagate",4000);
		Ordenador o= new Ordenador(p,disco);
		
		ArrayList<DiscoDuro> midisco = o.getDiscosDuros();
		
		System.out.println(midisco.o.getCapacidad());
		
		System.out.println(o.getDiscosDuros().getCapacidadtotal());
		System.out.println(o.getProcesador().getPotencia());
		

	}

}
