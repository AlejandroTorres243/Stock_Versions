<?php
function conecta($host,$username,$password,$database){
	mysql_connect($host,$username,$password);
	mysql_select_db($database);
}
function consulta($sql){
	$respuesta=mysql_query($sql);
	return $respuesta;
}
function desconecta(){
	mysql_close();
}

function cogedatosusuarios($data){
	$array=array();
	$num=mysql_numrows($data);
	$i=0;
	while ($i < $num) {
		$array[$i]=array();
		$id=mysql_result($data,$i,"id");
		$array[$i]['userid']=$id;
		$nombre=mysql_result($data,$i,"username");
		$array[$i]['username']=$nombre;
		$email=mysql_result($data,$i,"email");
		$array[$i]['email']=$email;
		$cp=mysql_result($data,$i,"cp");
		$array[$i]['cp']=$cp;
		$idciudad=mysql_result($data,$i,"idciudad");
		$array[$i]['idciudad']=$idciudad;
		$boletin=mysql_result($data,$i,"boletin");
		$array[$i]['boletin']=$boletin;
		$acepta=mysql_result($data,$i,"acepta");
		$array[$i]['acepta']=$acepta;
		$i++;
	}
	return $array;
}
function imprimeusuarios($datos){
	if (is_array($datos)) {
		echo "<table>";
		foreach ($datos as $key => $value) {
			echo "<tr>";
			echo "<td>".$value['userid']."</td>";
			echo "<td>".$value['username']."</td>";
			echo "<td>".$value['email']."</td>";
			echo "<td>";
			echo "<a href='mostrarusuario.php?id=".
			$value['userid']."'>Mostrar</a>";
			echo "<br/>";
			echo "<a href='editarusuario.php?id=".
			$value['userid']."'>Editar</a>";
			echo "<br/>";
			echo "<a href='borrarusuario.php?id=".
			$value['userid']."'>Borrar</a>";
			echo "<br/>";
			echo "</td>";
			echo "</tr>";
		}
		echo "</table>";
	}
}
function cogedatosprov($data){
	$array=array();
	$num=mysql_numrows($data);
	$i=0;
	while ($i < $num) {
		$array[$i]=array();
		$id=mysql_result($data,$i,"idprov");
		$array[$i]['idprov']=$id;
		$nombre=mysql_result($data,$i,"nombre");
		$array[$i]['nombre']=$nombre;
		$idpais=mysql_result($data,$i,"idpais");
		$array[$i]['idpais']=$idpais;
		$i++;
	}
	return $array;
}
function cogedatosciudad($data){
	$array=array();
	$num=mysql_numrows($data);
	$i=0;
	while ($i < $num) {
		$array[$i]=array();
		$id=mysql_result($data,$i,"idciudad");
		$array[$i]['id']=$id;
		$nombre=mysql_result($data,$i,"nombre");
		$array[$i]['nombre']=$nombre;
		$idprov=mysql_result($data,$i,"idprov");
		$array[$i]['idprov']=$idprov;
		$i++;
	}
	return $array;
}
function cogedatospais($data){
	$array=array();
	$num=mysql_numrows($data);
	$i=0;
	while ($i < $num) {
		$array[$i]=array();
		$id=mysql_result($data,$i,"idpais");
		$array[$i]['id']=$id;
		$nombre=mysql_result($data,$i,"nombre");
		$array[$i]['nombre']=$nombre;
		$i++;
	}
	return $array;
}
function comprobar_email($email){
    $mail_correcto = 0;
    //compruebo unas cosas primeras
    if ((strlen($email) >= 6) && (substr_count($email,"@") == 1) && (substr($email,0,1) != "@") && (substr($email,strlen($email)-1,1) != "@")){
       if ((!strstr($email,"'")) && (!strstr($email,"\"")) && (!strstr($email,"\\")) && (!strstr($email,"\$")) && (!strstr($email," "))) {
          //miro si tiene caracter .
          if (substr_count($email,".")>= 1){
             //obtengo la terminacion del dominio
             $term_dom = substr(strrchr ($email, '.'),1);
             //compruebo que la terminación del dominio sea correcta
             if (strlen($term_dom)>1 && strlen($term_dom)<5 && (!strstr($term_dom,"@")) ){
                //compruebo que lo de antes del dominio sea correcto
                $antes_dom = substr($email,0,strlen($email) - strlen($term_dom) - 1);
                $caracter_ult = substr($antes_dom,strlen($antes_dom)-1,1);
                if ($caracter_ult != "@" && $caracter_ult != "."){
                   $mail_correcto = 1;
                }
             }
          }
       }
    }
    if ($mail_correcto)
       return 1;
    else
       return 0;
} 
function imprime_fallos($arr){
		if (is_array($arr)) {
			foreach ($arr as $key => $value) {
				echo $value;
			}			
		}
		
	}
	function imprimesinoesnull($valor){
		if($valor!=null || $valor!=""){
			echo $valor;
		}
	}
	function checkedsimanda($valor){
		if($valor!=null){
			echo " checked ";
		}
	}
	function seleccionaprovincia($valor,$pos,$aprovs){
			
			if ($valor==$aprovs[$pos]) {
				echo ' selected="true" ';
			}
		
	}
?>