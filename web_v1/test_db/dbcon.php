<?php
//mysql_select_db('tap357297_db',mysql_connect('sql43.topnetpro.com','tap357297','GtxVbx95m25GaRNC'))or die(mysql_error());
//echo"test";
$host = "sql43.topnetpro.com"; 
$user = "tap357297"; 
$passwd = "GtxVbx95m25GaRNC"; 
$database = "tap357297_db"; 
$link = @mysql_connect($host, $user,$passwd);

if(!$link){
	die('Erreur de connexion au serveur');
}

$select_db = @mysql_select_db($database);
if(!$select_db){
	die('Erreur de connexion à la base');
}
if($select_db)
{
echo'ok';

}


?>