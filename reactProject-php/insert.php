<?php
ini_set('display_errors', 1);
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type,Authorization");

$postdata=file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request=json_decode($postdata);
    $name= $request ->name;
    $email= $request ->email;
    $password= $request ->password;
    
    $sql = "INSERT INTO customers (name,email,password) VALUES ('$name','$email','$password')";
    
    
if ($db->query($sql) === TRUE) {
    http_response_code(200);
    $successMessage = "Successfully Created an account!.";

      echo json_encode($successMessage);
  } else {
    echo "Error: " . $sql . "<br>" . $db->error;
  }
    // if(mysqli_query($db,$sql)){
    //     http_response_code(200);
    // }
    // else{http_response_code(422);
    // }

}
?>