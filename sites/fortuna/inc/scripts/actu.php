<?php

$contenu = file_get_contents("php://input");
$f = fopen('actu.json', 'w');
fwrite($f, $contenu);
$f = fclose($f);

echo '<p>Donnée enregistrée dans le fichier</p>';