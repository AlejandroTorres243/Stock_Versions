package com.Gestamp.Ejercicio4;

public class Telefono {

	private String operador;
	private int numero;
	
	public Telefono(String operador, int numero) {
		super();
		this.operador = operador;
		this.numero = numero;
	}

	public String getOperador() {
		return operador;
	}

	public void setOperador(String operador) {
		this.operador = operador;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}
	
}
