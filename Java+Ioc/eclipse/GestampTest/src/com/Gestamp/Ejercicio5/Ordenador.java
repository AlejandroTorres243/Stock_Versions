package com.Gestamp.Ejercicio5;

import java.util.ArrayList;

public class Ordenador {

	private ArrayList<DiscoDuro> discosDuros;
	private Procesador procesador;
	
	
	
	public ArrayList<DiscoDuro> getDiscosDuros() {
		return discosDuros;
	}
	public void setDiscosDuros(ArrayList<DiscoDuro> discosDuros) {
		this.discosDuros = discosDuros;
	}
	public Procesador getProcesador() {
		return procesador;
	}
	public void setProcesador(Procesador procesador) {
		this.procesador = procesador;
	}
	public Ordenador(Procesador procesador, DiscoDuro disco) {
		super();
		this.procesador = procesador; 
		this.addDisco(disco);
	}
	private void addDisco(DiscoDuro disco2) {
		// TODO Auto-generated method stub
		
		discosDuros.add(disco2);
		
	}
	
	public int capacidadTotal() {
		
		int capacidadTotal = 0;
		for (DiscoDuro disco : getDiscosDuros()) {
			
			capacidadTotal += disco.getCapacidad();
			
		}
		
		return capacidadTotal;
		
	}
	
}
