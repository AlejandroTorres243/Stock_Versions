package com.gestamp.formacion.hybrid.web;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.gestamp.formacion.hybrid.Dominio.Curso;
import com.gestamp.formacion.hybrid.Services.CursosServices;

/**
 * Servlet implementation class Controlador
 */
@WebServlet("/Controlador")
public class Controlador extends HttpServlet {

	/*
	 * 
	 * 
	 * 
	 * 
	 */

	
	
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		CursosServices servicio = new CursosServices();
		
		String accion = request.getParameter("accion");

		if (accion == null) {
			RequestDispatcher despachador = request.getRequestDispatcher("Listado.jsp");
			request.setAttribute("Listado", servicio.buscarTodos());
			despachador.forward(request, response);
		} else {

			if (accion.contentEquals("insercion")) { // Inserta un curso en la lista

				String titulo = request.getParameter("titulo");
				int duracion = Integer.parseInt(request.getParameter("duracion"));
				Curso c = new Curso(titulo, duracion);

				servicio.insertar(c);
				request.setAttribute("Listado", servicio.buscarTodos());

				RequestDispatcher despachador = request.getRequestDispatcher("Listado.jsp");
				despachador.forward(request, response);

			} else if (accion.equals("borrar")) { // borra un curso de la lista

				String titulo = request.getParameter("titulo");
				Curso c = new Curso(titulo);
				servicio.remove(c);
				
				request.setAttribute("Listado", servicio.buscarTodos());
				RequestDispatcher despachador = request.getRequestDispatcher("Listado.jsp");
				despachador.forward(request, response);

			} else if (accion.equals("editar")) {

				String titulo = (String) request.getParameter("titulo");
				Curso c = new Curso(titulo);
				
				request.setAttribute("curso", servicio.FindByTitle(titulo));
				
				
				request.setAttribute("Listado", servicio.buscarTodos());
				RequestDispatcher despachador = request.getRequestDispatcher("editar.jsp");
				despachador.forward(request, response);
				
			} else if (accion.equals("salvar")){
				
				String titulo = (String) request.getParameter("titulo");
				Curso c = new Curso(titulo);
				int duracion = Integer.parseInt(request.getParameter("duracion"));
				servicio.EditCourse(new Curso(titulo, duracion));
				
				request.setAttribute("Listado", servicio.buscarTodos());
				RequestDispatcher despachador = request.getRequestDispatcher("Listado.jsp");
				despachador.forward(request, response);
			} else {
				RequestDispatcher despachador = request.getRequestDispatcher("formularioInsercion.jsp");
				despachador.forward(request, response);
			}

		}
	}

}
