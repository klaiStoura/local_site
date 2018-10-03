<?php
//if($_POST){

  //  $to="klaiabdessattar@gmail.com";
   // $name = $_POST['nom'];
    //$prenon = $_POST['prenon'];
    //$num_tel = $_POST['num_tel'];
    //$email = $_POST['e_mail'];
    //$adresse = $_POST['adresse'];
    //$adresse_det = $_POST['adresse_det'];
    //$nbr_part = $_POST['nbr_part'];
    //$horaire = $_POST['horaire'];
   // $date1 = $_POST['date'];

 
//send email
   //if( mail($to, "This is an email from:",$name,$prenon,$num_tel,$email,$adresse))
   //{
    //echo 'Votre message a bien été envoyé ';
    //echo($nom);
    //echo($prenon);
//}
//else // Non envoyé
//{
  //  echo "Votre message n'a pas pu être envoyé";
//}

//}
//************************************************************** */

if(isset($_POST['nom']) && isset($_POST['prenon']) && isset($_POST['adresse']) && isset($_POST['num_tel']) && isset($_POST['ville']) && isset($_POST['pays']) && isset($_POST['tel']) && isset($_POST['mail']) && isset($_POST['mdp']) && isset($_POST['type']))
{
$nom = $_POST['nom'];
$prenom = $_POST['prenon'];
$adr = $_POST['adresse'];
$cp = $_POST['num_tel'];
$vil = $_POST['ville'];
$ps = $_POST['pays'];

$tel = $_POST['tel'];
$mail = $_POST['mail'];
$mdp = ($_POST['mdp']);
$type = $_POST['type'];

try{
//paramètre de connexion à la bdd
$host ='localhost';
$db ='inscrit';
$user = 'root';
$pwd = '';
// connexion à la bdd
$bdd = new PDO('mysql:host='.$host.';dbname='.$db.';charsert=utf8', $user, $pwd);
$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
$sql = $bdd->query('INSERT INT0 user VALUES ("","'.$nom.'", "'.$prenom.'","'.$adr.'","'.$cp.'","'.$vi.'","'.$ps.'","'.$tel.'","'.$mail.'", "'.$mdp.'" , "'.$type.'"');
}
catch (Exception $e) {
die('Erreur :' . $e->getMessage());
}
echo 'inscription réussie';

}
else{
echo "ISCRIPTION IMPOSSIBLE, veuillez contacter le webmaster.";
} ?>


