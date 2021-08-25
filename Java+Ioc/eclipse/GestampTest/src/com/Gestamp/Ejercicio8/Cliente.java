package com.Gestamp.Ejercicio8;

import java.util.ArrayList;

public class Cliente {
	
	String nombre;
	ArrayList<Mercado> lista;
	
	public Cliente(String nombre, Mercado lista) {
		super();
		this.nombre = nombre;
		this.addLista(lista);
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public ArrayList<Mercado> getLista() {
		return lista;
	}

	public void setLista(ArrayList<Mercado> lista) {
		this.lista = lista;
	}
	
	private void addLista(Mercado registro) {
		
		lista.add(registro);
		
	}
	
}
