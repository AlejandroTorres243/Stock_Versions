package com.gestamp.formacion.hybrid.Services;

import java.util.ArrayList;

import com.gestamp.formacion.hybrid.Dominio.Curso;
import com.gestamp.formacion.hybrid.persistence.CursoRepositoryMemory;
import com.gestamp.formacion.hybrid.persistence.IRepositoryCursoMemory;

public class CursosServices {

	IRepositoryCursoMemory repo1 = new CursoRepositoryMemory();

	public ArrayList<Curso> buscarTodos() {

		ArrayList<Curso> lista = repo1.BuscarTodos();

		// lista.addAll(lista2);

		return lista;

	}

	public void insertar(Curso c) {

		repo1.insertarCurso(c);

	}

	public void remove(Curso c) {
		
		repo1.borrar(c);
	}

	public Curso FindByTitle(String titulo) {

		return repo1.BuscarPorTitulo(titulo);
	}

	public void EditCourse(Curso c) {
		repo1.EditarCurso(c);
	}
}
