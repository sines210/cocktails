<?php

$sql = 'insert into users_recipes (name, type, category, instructions, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6) values (:name, :type, :category, :instructions, :ingredient1, :ingredient2, :ingredient3, :ingredient4, :ingredient5, :ingredient6)';
$newRecipe = $db->prepare($sql);
$newRecipe->bindValue(":name", $name, PDO::PARAM_STR);
$newRecipe->bindValue(":type", $type, PDO::PARAM_STR);
$newRecipe->bindValue(":category", $category, PDO::PARAM_STR);
$newRecipe->bindValue(":instructions", $instructions, PDO::PARAM_STR);
$newRecipe->bindValue(":ingredient1", $ingredient1, PDO::PARAM_STR);
$newRecipe->bindValue(":ingredient2", $ingredient2, PDO::PARAM_STR);
$newRecipe->bindValue(":ingredient3", $ingredient3, PDO::PARAM_STR);
$newRecipe->bindValue(":ingredient4", $ingredient4, PDO::PARAM_STR);
$newRecipe->bindValue(":ingredient5", $ingredient5, PDO::PARAM_STR);
$newRecipe->bindValue(":ingredient6", $ingredient6, PDO::PARAM_STR);


$newRecipe->execute();



?>