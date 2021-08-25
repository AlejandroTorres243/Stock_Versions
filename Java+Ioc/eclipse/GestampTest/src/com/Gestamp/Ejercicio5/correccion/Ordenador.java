package com.Gestamp.Ejercicio5.correccion;

import java.util.ArrayList;

import com.Gestamp.Ejercicio5.DiscoDuro;

public class Ordenador {

		private ArrayList<DiscoDuro> discoDuro;
		private Procesador procesador;
		
		public ArrayList<DiscoDuro> getDiscoDuro() {
			return discoDuro;
		}
		public void setDiscosDuros(ArrayList<DiscoDuro> discoDuro) {
			this.discoDuro = discoDuro;
		}
		public Procesador getProcesador() {
			return procesador;
		}
		public void setProcesador(Procesador procesador) {
			this.procesador = procesador;
		}
		public Ordenador(DiscoDuro discoDuro, Procesador procesador) {
			super();
			this.addDisco(discoDuro);
			this.procesador = procesador;
		}
		private void addDisco(DiscoDuro disco2) {
			// TODO Auto-generated method stub
			
			DiscoDuro.add(disco2);
			
		}
		
		public int capacidadTotal() {
			
			int capacidadTotal = 0;
			for (DiscoDuro disco : getDiscosDuros()) {
				
				capacidadTotal += disco.getCapacidad();
				
			}
			
			return capacidadTotal;
			
		}
}
