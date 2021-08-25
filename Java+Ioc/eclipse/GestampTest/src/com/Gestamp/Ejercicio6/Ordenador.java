package com.Gestamp.Ejercicio6;

public class Ordenador {

	private Procesador pc;
	private Disco almacenamiento;
	
	public Ordenador(Procesador pc, Disco almacenamiento) {
		super();
		this.pc = pc;
		this.almacenamiento = almacenamiento;
	}

	public Procesador getPc() {
		return pc;
	}

	public void setPc(Procesador pc) {
		this.pc = pc;
	}

	public Disco getAlmacenamiento() {
		return almacenamiento;
	}

	public void setAlmacenamiento(Disco almacenamiento) {
		this.almacenamiento = almacenamiento;
	}
	
}
