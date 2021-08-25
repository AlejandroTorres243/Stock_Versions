<?php
header('Content-type: application/json');
if(isset($_REQUEST)&& isset($_REQUEST["username"])
&&$_REQUEST["username"]!=""){
	print('{"username":"'.$_REQUEST['username'].'"');
}else{
	print('{"username":"none"');
}
if(isset($_REQUEST)&& isset($_REQUEST["password"])
&&$_REQUEST["password"]!=""){
	print(',"password":"'.$_REQUEST['password'].'"}');
}else{
	print(',"password":"none"}');
}
