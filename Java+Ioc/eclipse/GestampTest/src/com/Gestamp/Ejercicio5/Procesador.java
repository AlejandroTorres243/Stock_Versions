package com.Gestamp.Ejercicio5;

public class Procesador {

	
	private String marca;
	private int potencia;
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public int getPotencia() {
		return potencia;
	}
	public void setPotencia(int potencia) {
		this.potencia = potencia;
	}
	public Procesador(String marca, int potencia) {
		super();
		this.marca = marca;
		this.potencia = potencia;
	}
	
	
}
