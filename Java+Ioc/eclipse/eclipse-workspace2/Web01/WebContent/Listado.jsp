<%@page import="com.gestamp.formacion.hybrid.Dominio.Curso"%>
<%@page import="com.gestamp.formacion.hybrid.Services.CursosServices"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
ArrayList<Curso> lista = CursosServices.buscarTodos();
for (Curso curs : lista){
out.println(curs.getTitulo());
}
%>
<a href="formularioInsercion.jsp">insertar</a>
</body>
</html>