package com.Gestamp.Ejercicio5.correccion;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

				Procesador p= new Procesador("intel",3000);
				DiscoDuro disco= new DiscoDuro("seagate",4000);
				Ordenador o= new Ordenador(disco,p);
				
				DiscoDuro midisco= o.getDiscoDuro();
				
				System.out.println(midisco.getCapacidad());
				
				System.out.println(o.getDiscoDuro().getCapacidad());
				System.out.println(o.getProcesador().getPotencia());
			

	}

}
