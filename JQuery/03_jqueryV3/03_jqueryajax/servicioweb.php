<?php
//print_r($_REQUEST);
if (isset($_REQUEST['ajax'])) {
	if (isset($_REQUEST['username'])) {
		if ($_REQUEST['username']=="pepesan") {
			echo "si";
		}else{
			echo "no";
		}
	}else {
		echo "no";
	}	
}else {
	if(isset($_REQUEST['username'])&& $_REQUEST['username']=="pepesan"){
		echo "HECHO!";
	}else{
		include("formulario.html");
	}
}

?>