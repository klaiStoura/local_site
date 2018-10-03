<?php

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$adr = $_POST['adresse'];
$mobile = $_POST['num_tel'];
$email = $_POST['e_mail'];
$login = $_POST['login'];
$password = $_POST['password'];
// Connexion à la base de donnée pour WAMP
$host = "localhost"; 
$user = "admintap_devklai"; 
$passwd = "Klai,;2018"; 
$database = "admintap_bd"; 
$link = @mysql_connect($host,$user,$passwd);

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'FROM:' . htmlspecialchars($_POST['email']);
$to = 'klaiabdessattar@gmail.com'; // Insérer votre adresse email ICI
$subject = 'Message envoyé par ' . htmlspecialchars($_POST['nom']) .' - <i>' . htmlspecialchars($_POST['email']) .'</i>';
$message_content = '
<table>
<tr>
<td><b>Emetteur du message:</b></td>
</tr>
<tr>
<td>'. $subject . '</td>
</tr>
<tr>
<td><b>Contenu du message:</b></td>
</tr>
<tr>
<td>'. htmlspecialchars($_POST['nom']) .'</td>
</tr>
<tr>
<td>'. htmlspecialchars($_POST['prenom']) .'</td>
</tr>
<tr>
<td>'. htmlspecialchars($_POST['adresse']) .'</td>
</tr>
</table>
';
mail($to, $subject, $message_content, $headers);

if(!$link){
	die('Erreur de connexion au serveur');
}
else
 echo('connection reusite au serveur ');

$select_db = @mysql_select_db($database);
if(!$select_db){
	die('Erreur de connexion à la base');
}
else
 echo('connection reusite a la base de donnée ');
// Connexion à la base de donnée
// $base = mysql_connect ('serveur', 'login', 'pass');  
//mysql_select_db ('ma_base', $base) ; 

// Déclaration des variables
$msg_erreur = "Erreur. Les champs suivants doivent être obligatoirement remplis :<br/><br/>";
$msg_ok = "Enregistrement reussi.";
$message = $msg_erreur;

// Enregistrement des champs non remplis
// Utilisation la fonction PHP empty() qui retourne:
//  -> "vrai" si la variable passée en paramètre est vide
//  -> "faux" dans le cas contraire.
if (empty($_POST['nom'])) 
$message .= "nom<br/>";

// Si le contenu de la variable $message et plus grand que celui de la variable $msg_erreur, 
// c'est que nous venons d'ajouter des champs non remplis donc on affiche un message d'erreur
if (strlen($message) > strlen($msg_erreur)) {
echo $message;
}
// Si les champs sont bien remplis, on peut insérer leurs valeurs dans la base de données MySQL.
// Utilisation de mysql_real_escape_string() qui protège les données avant insertion et notamment 
// les apostrophes, guillemets, etc... pour protéger des attaques par injection SQL.
// La boucle foreach() va passer toutes la variables $_POST envoyées par le formulaire en revue. 
// Pour chacune d'elle nous allons créer une variable spécifique avec $$index, nettoyer sa valeur avec trim() 
// (en enlevant notamment les espaces de fin) et sécuriser sa valeur avec mysql_real_escape_string().
else{
	foreach($_POST as $index => $valeur){
		$index = mysql_real_escape_string(trim($valeur));
	}
// Insérer les données dans la table "appels" avec une requête sql de type "INSERT" et la fonction mysql_query().
// Vérification que la requête s'est bien effectuée avec la valeur de retour $res
// Si c'est le cas, on affiche $msg_ok, sinon on affiche l'erreur qui a eu lieu dans MySQL
// Le premier "" dans values correspont dans la table à l'ID qui est automatiquement incrémenté
	$sql="INSERT INTO user(nom, prenom, adresse, mobile, email, login, password )
	VALUES ('$nom','$prenom','$adr','$mobile','$email','$login','$password')";
	$res=mysql_query($sql);
	if ($res) {
		echo $msg_ok;
	} else {
		echo mysql_error();
	}


	//send email
		//mail("klaiabdessattar@gmail.com", "This is an email from:" .$nom, $prenon,$adr,$mobile,$email);
	
}
?>