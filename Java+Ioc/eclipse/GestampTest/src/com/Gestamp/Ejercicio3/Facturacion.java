package com.Gestamp.Ejercicio3;

public class Facturacion {

	int id;
	String concepto;
	double importe;
	
	public Facturacion(int id, String concepto, double importe) {
		super();
		this.id = id;
		this.concepto = concepto;
		this.importe = importe;
	}

	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getConcepto() {
		return concepto;
	}



	public void setConcepto(String concepto) {
		this.concepto = concepto;
	}



	public double getImporte() {
		return importe;
	}



	public void setImporte(double importe) {
		this.importe = importe;
	}



	public double getImporteConIva() {
		
		//CalculoFinanciero calculo = new CalculoFinanciero();
		//return calculo.calcularImporteConIVA(getImporte(), 21);
		return CalculoFinanciero.calcularImporteConIVA(getImporte());
		
	}
	
	public double getImporteConIva(int iva) {
		
		//CalculoFinanciero calculo = new CalculoFinanciero();
		//return calculo.calcularImporteConIVA(getImporte(), 21);
		return CalculoFinanciero.calcularImporteConIVA(getImporte(), iva);
		
	}
	
	
}
