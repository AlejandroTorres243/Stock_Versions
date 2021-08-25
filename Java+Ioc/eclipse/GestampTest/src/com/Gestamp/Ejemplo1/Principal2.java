package com.Gestamp.Ejemplo1;

public class Principal2 {

	public static void main(String[] args) {

		Compra activo = new Compra(2, "Asus", 200);

		System.out.println(activo.id);
		System.out.println(activo.concepto);
		System.out.println(activo.importe);
		
		activo.pagar();
		activo.pagar(2);
		
	}

}
