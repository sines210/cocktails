<?php

	$login= "root";
	$password= "root";
	$dsn= "localhost";
	$db_name="cocktails_api";
	
	try{
		$db= new PDO("mysql:host=localhost:<port>;dbname=cocktails_api", $login, $password);
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		}
	catch(PDOException $e){
		echo $e->getMessage();
	}
?>