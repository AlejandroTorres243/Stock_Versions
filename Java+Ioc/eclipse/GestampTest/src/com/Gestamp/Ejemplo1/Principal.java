package com.Gestamp.Ejemplo1;

public class Principal {

	public static void main(String[] args) {

		Compra activo = new Compra();
		activo.id = 1;
		activo.concepto = "ordenador";
		activo.importe = 300;
		
		System.out.println(activo.id);
		System.out.println(activo.concepto);
		System.out.println(activo.importe);
		
		activo.pagar();
		activo.pagar(10);
		
		Compra activo2 = new Compra();
		activo2.id = 2;
		activo2.concepto = "televisor";
		activo2.importe = 450;
		
		System.out.println(activo2.id);
		System.out.println(activo2.concepto);
		System.out.println(activo2.importe);
		
		activo2.pagar();
		
	}

}
