<?php
if(isset($_POST["submit"])){
$hostname='localhost';
$username='';
$password='';
 
try {
$dbh = new PDO("mysql:host=$hostname;dbname=inscrit",$username,$password);
 
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // <== add this line
$sql = "INSERT INTO user (pseudo,password)
VALUES ('".$_POST["pseudo"]."','".$_POST["passord"]."')";
if ($dbh->query($sql)) {
echo "<script type= 'text/javascript'>alert('New Record Inserted Successfully');</script>";
}
else{
echo "<script type= 'text/javascript'>alert('Data not successfully Inserted.');</script>";
}
 
$dbh = null;
}
catch(PDOException $e)
{
echo $e->getMessage();
}
 
}
?>