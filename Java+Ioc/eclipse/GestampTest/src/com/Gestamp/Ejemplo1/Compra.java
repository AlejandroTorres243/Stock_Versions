package com.Gestamp.Ejemplo1;

public class Compra {

	int id;
	String concepto;
	double importe;
	
	Compra(){}
	
	Compra(int _id, String _concepto, double _importe){
		
		id = _id;
		concepto = _concepto;
		importe = _importe;
		
	}
	
	void pagar() {
		
		System.out.println("Has pagado " + importe + " euros");
		
	}
	
	void pagar(int iva) {
		
		System.out.println("Has pagado de iva " + (importe + (importe*iva)));
		
	}
	
}
