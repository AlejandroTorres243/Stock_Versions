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
<h1>Listado</h1>
<table border="1">
<%
ArrayList<Curso>  lista= (ArrayList<Curso>) request.getAttribute("Listado");
for (Curso curs : lista){
%>

<tr> <td>  <%=curs.getTitulo()%> </td><td>  <%=curs.getDuracion() %> </td>  <td><a href="Controlador?accion=borrar&titulo=<%=curs.getTitulo()%>">borrar</a></td><td><a href="Controlador?accion=editar&titulo=<%=curs.getTitulo()%>">editar</a></td> </tr>

<%}%>
</table>
<div style="margin: 10px;">
<a style="background-color: skyblue; padding:10px; text-decoration:none; margin: 5px;" href="Controlador?accion=formularioInsercion">insertar</a>
</div>

</body>
</html>

