package memory2;

import java.util.ArrayList;

import com.gestamp.formacion.hybrid.Dominio.Curso;

import memory.CursoRepositoryMemory;

public class CursoRepositoryMemory2 extends CursoRepositoryMemory {

	
	static ArrayList<Curso> lista = new ArrayList<Curso>();
	static {
		lista.add(new Curso("Java",20));
		lista.add(new Curso("net", 30));
		lista.add(new Curso("Paco", 40));
	}
	
	// Metodos del repositorio
	
	public ArrayList<Curso> BuscarTodos(){
		
		return lista;
	}
}
