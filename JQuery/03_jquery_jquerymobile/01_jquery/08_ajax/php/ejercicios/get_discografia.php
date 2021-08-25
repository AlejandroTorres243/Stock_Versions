<?php
$array_datos[1] = array(	array("autor" => "Platero y tu",
								  "disco" => "VOY A ACABAR BORRACHO",
								  "year" => "1991"),
							array("autor" => "Platero y tu",
								  "disco" => "BURROCK'N'ROLL",
								  "year" => "1992"),
							array("autor" => "Platero y tu",
								  "disco" => "MUY DEFICIENTE",
								  "year" => "1992"),
							array("autor" => "Platero y tu",
								  "disco" => "VAMOS TIRANDO",
								  "year" => "1993"),
							array("autor" => "Platero y tu",
								  "disco" => "HAY POCO ROCK&ROLL",
								  "year" => "1994"),
							array("autor" => "Platero y tu",
								  "disco" => "A PELO",
								  "year" => "1996"),
							array("autor" => "Platero y tu",
								  "disco" => "7",
								  "year" => "1997"),
							array("autor" => "Platero y tu",
								  "disco" => "CORREOS",
								  "year" => "2000"),
							array("autor" => "Platero y tu",
								  "disco" => "HAY MUCHO ROCK'N'ROLL",
								  "year" => "2002"),
								  
						);
						
$array_datos[2] = array(	array("autor" => "Fito y fitipaldis",
								  "disco" => "A puerta cerrada",
								  "year" => "1998"),
							array("autor" => "Fito y fitipaldis",
								  "disco" => "Los sueños locos",
								  "year" => "2001"),
							array("autor" => "Fito y fitipaldis",
								  "disco" => "Lo mas lejos a tu lado",
								  "year" => "2003"),
							array("autor" => "Fito y fitipaldis",
								  "disco" => "Vivo... para contarlo en directo",
								  "year" => "2004"),
							array("autor" => "Fito y fitipaldis",
								  "disco" => "Por la boca vive el pez",
								  "year" => "2006"),
							array("autor" => "Fito y fitipaldis",
								  "disco" => "Dos son multitud, en directo con Andrés Calamaro",
								  "year" => "2008"),
							array("autor" => "Fito y fitipaldis",
								  "disco" => "Antes de que cuente 10",
								  "year" => "2009")
						);
$array_datos[3] = array(	array("autor" => "Extrechinato y tu",
								  "disco" => "Poesía Básica",
								  "year" => "2001")
						);
$array_datos[4] = array(	array("autor" => "Parchis",
								  "disco" => "A, b, c",
								  "year" => "1984"),
						);


echo json_encode($array_datos[$_GET["id"]]);