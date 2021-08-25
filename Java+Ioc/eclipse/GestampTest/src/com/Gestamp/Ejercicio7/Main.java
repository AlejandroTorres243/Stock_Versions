package com.Gestamp.Ejercicio7;

import java.util.ArrayList;

import com.Gestamp.Ejercicio3.*;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Facturacion f1 = new Facturacion(123,"Ordenador", 341);
		Facturacion f2 = new Facturacion(181,"Movil", 791);
		Facturacion f3 = new Facturacion(289,"Tv", 111);
		double contador = 0;
		
		ArrayList <Facturacion> lista = new ArrayList<Facturacion>();
		
		lista.add(f1);
		lista.add(f2);
		lista.add(f3);
		
		for(Facturacion f: lista ) {
			
			System.out.println(f.getImporte());
			
		}
		
		Boolean condicion = false;
		
		for(Facturacion f: lista) {
			
			condicion = (f.getImporteConIva() > 1000)? true : false;
			contador += f.getImporteConIva();
			
		}
		
		System.out.println( (int)contador + "\nNo has gastad tanto: " + condicion);
		
	}

}
