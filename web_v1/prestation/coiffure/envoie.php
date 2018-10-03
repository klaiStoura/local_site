<?php
if($_POST){
    $name = $_POST['nom'];
    $prenon = $_POST['prenon'];
    $num_tel = $_POST['num_tel'];
    $email = $_POST['e-mail'];

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'FROM:' . htmlspecialchars($_POST['email']);
    $to = 'klaiabdessattar@gmail.com'; // Insérer votre adresse email ICI
    $subject = 'Message envoyé par ' . htmlspecialchars($_POST['nom']) .' - <i>' . htmlspecialchars($_POST['prenon']) .'</i>';
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
  <td>'. htmlspecialchars($_POST['num_tel']) .'</td>
  </tr>
  </table>
  ';
    mail($to, $subject, $message_content, $headers);

//send email
   // mail("klaiabdessattar@gmail.com", "This is an email from:" .$nom, $prenon,$num_tel,$email);
}
?>