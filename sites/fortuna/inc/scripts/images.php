<?php

for ($i = 0; $i < 2; $i++){
    move_uploaded_file($_FILES['photo' . $i]['tmp_name'], "../img/actu/actu" . $i . ".jpg");
}

echo '<p>Fichier(s) enregistré(s)</p>';