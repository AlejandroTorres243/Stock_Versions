package memory;

import java.util.ArrayList;

import com.gestamp.formacion.hybrid.Dominio.Curso;

import interfaces.ICursoRepository;

public class CursoRepositoryMemory implements ICursoRepository {

	// variables
	static ArrayList<Curso> lista = new ArrayList<Curso>();
	static {
		lista.add(new Curso("Java",20));
		lista.add(new Curso("net", 30));
		lista.add(new Curso("Paco", 40));
	}
	
	// Metodos del repositorio
	
	@Override
	public ArrayList<Curso> BuscarTodos(){
		
		return lista;
	}
	
	@Override
	public void insertarCurso(Curso cursonuevo) {
		
		lista.add(cursonuevo);
		
	}
	
	@Override
	public void borrar(Curso c) {
		lista.remove(c);
	}
	
	@Override
	public Curso buscarUno(String titulo) {
		
		return lista.stream().filter((c)->c.getTitulo().equals(titulo)).findFirst().get();
		
	}
	
	@Override
	public void salvar(Curso c) {
		
		lista.remove(c);
		lista.add(c);
		
	}
	
	public Curso BuscarPorTitulo(String titulo) {
		
		return null;
		
	}
	
	@Override
	public void EditarCurso(Curso c) {
		// TODO Auto-generated method stub
		
	}
	
}
