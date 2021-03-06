package com.gestamp.formacion.hybrid.Services;

import java.util.ArrayList;

import com.gestamp.formacion.hybrid.Dominio.Curso;

import interfaces.ICursoRepository;
import memory.CursoRepositoryMemory;
import utils.FactoriaCursoRepository;
import utils.TipoRepositorio;

public class CursosServices {

	//ICursoRepository repo1 = new CursoRepository();
	private CursoRepositoryMemory repo1;
	
	

	public CursosServices() {
		this.repo1 = FactoriaCursoRepository.getRepositorio(TipoRepositorio.Memory2);
	}

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
