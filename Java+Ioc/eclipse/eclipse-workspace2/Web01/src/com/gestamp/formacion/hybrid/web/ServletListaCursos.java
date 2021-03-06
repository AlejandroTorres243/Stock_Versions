package com.gestamp.formacion.hybrid.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.gestamp.formacion.hybrid.Dominio.Curso;
import com.gestamp.formacion.hybrid.Services.CursosServices;
import com.gestamp.formacion.hybrid.persistence.CursoRepositoryMemory;

/**
 * Servlet implementation class ServletListaCursos
 */
@WebServlet("/ServletListaCursos")
public class ServletListaCursos extends HttpServlet {

	/*
	 * C# -> CONTROLADORES / JAVA -> SERVLETS
	 * 
	 */
	
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		PrintWriter pw = response.getWriter();
		ArrayList<Curso> lista = CursosServices.buscarTodos();
		
		for(Curso cursos : lista) {
			
			pw.print("<p>" + cursos.getTitulo() + "</p>");
		
			
		}
		
	}


}
