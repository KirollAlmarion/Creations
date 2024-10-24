<?php
    $acces = false;
    if(isset($_POST['password'])) { 
                $acces=($_POST['password'] == 'sesame');
    }
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mise à jour des actualités</title>
    <link rel="stylesheet" href="maj-actu.css">
</head>
<body>
	
    <?php if (!$acces): ?>
		<form method="post" action="" enctype="multipart/form-data">
                <label for="password">Mot de passe</label><br>
                <input type="text" name="password" id="password" value=""><br>
                <button type="submit">Entrer</button>
    	</form>
        
    
	<?php else: ?>

    <form>
        <fieldset>
           <legend>Première actualité</legend>
            <label for="titre0">Titre :</label>
            <input type="text" name="titre0" id="titre0" size="111">
            <label for="sous-titre0">Sous-titre :</label>
            <input type="text" name="sousTitre0" id="sous-titre0" size="111">
            <label for="descriptif0">Descriptif :</label>
            <textarea name="descriptif0" id="descriptif0" rows="7" cols="114"></textarea>
            <!--<label for="date0">Date :</label>
            <input type="datetime-local" name="date0" id="date0">-->
            <label for="photo0">Image :</label>
            <input type="file" name="photo0" id="photo0" accept="image/jpeg">
            <div>
            	<p>&lt;cite&gt;<cite>Titre</cite>&lt;/cite&gt;</p>
            	<p>&lt;q&gt;<q>Citation</q>&lt;/q&gt;</p>
            	<p>&lt;strong&gt;<strong>Gras</strong>&lt;/strong&gt;</p>
            	<p>&lt;em&gt;<em>Italique</em>&lt;/em&gt;</p>
            	<p>&lt;sup&gt;<sup>Exposant</sup>&lt;/sup&gt;</p>
            	<p>Saut de ligne &#8626; </sup>&lt;br&gt;</p>
        	</div>
        </fieldset>
        
        <fieldset>
           <legend>Deuxième actualité</legend>
            <label for="titre1">Titre :</label>
            <input type="text" name="titre1" id="titre1" size="111">
            <label for="sous-titre1">Sous-titre :</label>
            <input type="text" name="sousTitre1" id="sous-titre1" size="111">
            <label for="descriptif1">Descriptif :</label>
            <textarea name="descriptif1" id="descriptif1" rows="7" cols="114"></textarea>
            <!--<label for="date1">Date :</label>
            <input type="datetime-local" name="date1" id="date1">-->
            <label for="photo1">Image :</label>
            <input type="file" name="photo1" id="photo1" accept="image/jpeg">
            <div>
            	<p>&lt;cite&gt;<cite>Titre</cite>&lt;/cite&gt;</p>
            	<p>&lt;q&gt;<q>Citation</q>&lt;/q&gt;</p>
            	<p>&lt;strong&gt;<strong>Gras</strong>&lt;/strong&gt;</p>
            	<p>&lt;em&gt;<em>Italique</em>&lt;/em&gt;</p>
            	<p>&lt;sup&gt;<sup>Exposant</sup>&lt;/sup&gt;</p>
            	<p>Saut de ligne &#8626; </sup>&lt;br&gt;</p>
        	</div>
        </fieldset>
        <button type="submit">Enregistrer</button>
    </form>
    <figure><img src="fixe.gif"></figure>
    <script src="maj-actu.js"></script>
    <?php endif ?>
</body>
</html>