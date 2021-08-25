<?php
$listaPersona = array();

$nombreCliente = $_POST['nombreCliente'];
$edadCliente = $_POST['edadCliente'];

/**
* Asiganado listado de personas
*/
$persona = array('nombre' => 'Paulina', 'edad' => 14);
$listaPersona[] = $persona;

$persona = array('nombre' => 'Michelle', 'edad' => 1);
$listaPersona[] = $persona;

$persona = array('nombre' => 'Dilan', 'edad' => 5);
$listaPersona[] = $persona;

$persona = array('nombre' => 'Susan', 'edad' => 24);
$listaPersona[] = $persona;

$persona = array('nombre' => 'Israel', 'edad' => 26);
$listaPersona[] = $persona;

$persona = array('nombre' => 'Lola Meraz', 'edad' => 20);
$listaPersona[] = $persona;

$persona = array('nombre' => $nombreCliente, 'edad' => $edadCliente);
$listaPersona[] = $persona;

echo json_encode($listaPersona);
