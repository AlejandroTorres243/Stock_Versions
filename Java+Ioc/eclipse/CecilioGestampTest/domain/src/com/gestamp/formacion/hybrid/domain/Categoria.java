package com.gestamp.formacion.hybrid.domain;

import java.util.ArrayList;

public class Categoria {

	private String nombre;
	private ArrayList<Curso> cursos = new ArrayList<Curso>();
	
	public ArrayList<Curso> getCursos(){}
	
	public
	
	public Categoria(String nombre, ArrayList<Curso> cursos) {
		super();
		this.nombre = nombre;
		this.cursos = cursos;
	}

	public Categoria(String nombre) {
		super();
		this.nombre = nombre;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	
	
}
