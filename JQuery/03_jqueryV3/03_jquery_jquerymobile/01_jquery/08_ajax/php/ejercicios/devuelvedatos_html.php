<?php
$array = array(
    "user_name" => $_POST['user_name'],
    "name" => $_POST['name'],
    "firstname" => $_POST['firstname']
);
echo "<tr><td>"+$_POST['user_name']+"</td><td>"+$_POST['name']+"</td><td>"+$_POST['firstname']+"</td></tr>";
//json_encode($array);
/*if(isset($_POST['user_name']))
 
echo $_POST['jsonString'];*/
