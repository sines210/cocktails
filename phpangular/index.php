<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

/*phpinfo();*/





include './db.php';



if(isset($_POST['name'])&& isset($_POST['type'])&&isset($_POST['category'])&&isset($_POST['instructions'])&&isset($_POST['ingredient1'])&&isset($_POST['ingredient2'])&&isset($_POST['ingredient3'])&&isset($_POST['ingredient4'])&&isset($_POST['ingredient5'])&&isset($_POST['ingredient6']))
{
	$name = htmlspecialchars($_POST['name']);
	$type = htmlspecialchars($_POST['type']);
	$category = htmlspecialchars($_POST['category']);
	$instructions = htmlspecialchars($_POST['instructions']);
	$ingredient1 = htmlspecialchars($_POST['ingredient1']);
	$ingredient2 = htmlspecialchars($_POST['ingredient2']);
	$ingredient3 = htmlspecialchars($_POST['ingredient3']);
	$ingredient4 = htmlspecialchars($_POST['ingredient4']);
	$ingredient5 = htmlspecialchars($_POST['ingredient5']);
	$ingredient6 = htmlspecialchars($_POST['ingredient6']);
 -


require './pdo.php';
/*return $response;*/



}


/*methode pour recuperer un ngform angular en format texte
$json = file_get_contents('php://input');print_r($json);*/


?>


