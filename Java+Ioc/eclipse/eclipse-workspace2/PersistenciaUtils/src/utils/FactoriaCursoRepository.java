package utils;

import memory.CursoRepositoryMemory;
import memory.CursoRepositoryMemory;
import memory2.CursoRepositoryMemory2;

public class FactoriaCursoRepository {
	
	public static CursoRepositoryMemory getRepositorio(TipoRepositorio tipo) {
		
		if(tipo == TipoRepositorio.Memory)
			return new CursoRepositoryMemory();
		else
			return new CursoRepositoryMemory2();
		
	}
	
}
