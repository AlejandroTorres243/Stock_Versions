<?php
if (isset($_REQUEST['username'])) {
	include_once 'config.php';
	include_once 'funciones.php';
	conecta($host,$username,$password,$database);
	$sql = "select * from usuario where username='".
	$_REQUEST['username']."'";
	$respuesta=consulta($sql);
	$datos=cogedatosusuarios($respuesta);
	if (is_array($datos) && count($datos)>0) {
		echo "si";
	}else{
		echo "no";
	}
	desconecta();
}else {
	echo "no";
}
?>