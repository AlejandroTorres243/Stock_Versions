package com.gestamp;

public class Configurador {
	
	private static Configurador c = null;
	
	public static Configurador getConfigurador(String carpeta) {
		
		if(c == null)
			c = new Configurador(carpeta);
		return c;
	}
	
	private String carpeta;

	public Configurador(String carpeta) {
		super();
		this.carpeta = carpeta;
	}

	public String getCarpeta() {
		return carpeta;
	}

	public void setCarpeta(String carpeta) {
		this.carpeta = carpeta;
	}
}
