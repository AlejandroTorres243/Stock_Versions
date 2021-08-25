package com.gestamp.formacion.hybrid.domain;

public class Curso {

	private String titulo;
	private int duracion;
	private Categoria categoria;
	
	
	public Curso(String titulo, int duracion, Categoria categoria) {
		super();
		this.titulo = titulo;
		this.duracion = duracion;
		this.categoria = categoria;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public int getDuracion() {
		return duracion;
	}
	public void setDuracion(int duracion) {
		this.duracion = duracion;
	}
	
	public Curso(String titulo, int duracion) {
		super();
		this.titulo = titulo;
		this.duracion = duracion;
	}
	
}
