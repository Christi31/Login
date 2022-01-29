<?php
$servername = "localhost:3306";
$username = "root";
$password = "root@123";
$database= "LoginUsers";
 
// Create connection
// $db = mysqli_connect($servername, $username, $password, $database);
$db = new mysqli($servername, $username, $password, $database);
// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
//   echo 'Error: '.$mysqli->connect_error;
}
?>