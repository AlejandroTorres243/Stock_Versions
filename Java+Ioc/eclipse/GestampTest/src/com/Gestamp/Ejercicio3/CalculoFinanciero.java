package com.Gestamp.Ejercicio3;

public class CalculoFinanciero {
	
	// con o sin static
	public static double calcularImporteConIVA(double importe, int porcentaje) {
		
		return calcularPorcentaje(importe,porcentaje) + importe;
		
	}
	
	public static double calcularImporteConIVA(double importe) {
		
		return calcularImporteConIVA(importe, 21);
		
	}
	
	public static double tasaPagoPiso(double importe) {
		
		return calcularPorcentaje(importe,15) + importe;
		
	}
	
	private static double calcularPorcentaje(double importe, int porcentaje) {
		
		return importe/100 * porcentaje;
		
	}
	
}
