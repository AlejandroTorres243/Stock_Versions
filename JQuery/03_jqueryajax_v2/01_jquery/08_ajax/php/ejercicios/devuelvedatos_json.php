<?php
$array = array(
    "user_name" => $_POST['user_name'],
    "name" => $_POST['name'],
    "firstname" => $_POST['firstname']
);
echo json_encode($array);
/*if(isset($_POST['user_name']))
echo $_POST['jsonString'];*/
