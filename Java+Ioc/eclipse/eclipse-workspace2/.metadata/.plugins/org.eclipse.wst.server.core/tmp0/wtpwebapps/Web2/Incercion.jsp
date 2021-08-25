<%@page import="com.gestamp.formacion.hybrid.Dominio.Curso"%>
<%@page import="com.gestamp.formacion.hybrid.Services.CursosServices"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>Insercion</h1>
 <%
 
 
 	String titulo = request.getParameter("titulo");
 	int duracion = Integer.parseInt(request.getParameter("duracion"));
 	
 	CursosServices servicio = new CursosServices();
 	servicio.insertar(new Curso(titulo,duracion));
 	response.sendRedirect("Listado.jsp");
 
 
 %>
</body>
</html>