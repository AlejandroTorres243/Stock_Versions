<?php
$array_datos = array(); 
$array_datos[] = array("id" => 1, "nombre"=> "Platero y tu");
$array_datos[] = array("id" => 2, "nombre"=> "Fito y fitipaldis");
$array_datos[] = array("id" => 3, "nombre"=> "Extrechinato y tu");
$array_datos[] = array("id" => 4, "nombre"=> "Parchis");

echo json_encode($array_datos);