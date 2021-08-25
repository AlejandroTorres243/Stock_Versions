package com.Gestamp.Ejercicio6;

public class Procesador {

	private String potencia, marca;
	private Disco prueba;

	public Procesador(String potencia, String marca) {
		super();
		this.potencia = potencia;
		this.marca = marca;
	}

	public String getPotencia() {
		return potencia;
	}

	public void setPotencia(String potencia) {
		this.potencia = potencia;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public Procesador(Disco prueba) {
		super();
		this.prueba = prueba;
	}
	
	
	
}
