<%@page import="com.gestamp.formacion.hybrid.Dominio.Curso"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
	
	<% Curso c = (Curso)request.getAttribute("curso");  %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>Editar</h1>
	<form action="Controlador">
		<input type="Hidden" name="accion" value="salvar" /> 
		Titulo:<input type="text" name="titulo" value="<%=c.getTitulo()%>" />
			
		Duracion:<input type="text"name="duracion" value="<%=c.getDuracion()%>" /> 
		<input type="submit" value="editar" />
	</form>
</body>
</html>