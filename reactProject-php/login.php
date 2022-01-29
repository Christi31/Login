<?php
ini_set('display_errors', 1);
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type,Authorization");

$postdata=file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request=json_decode($postdata);
    $email= $request ->email;
    $password= $request ->password;
    
    $sql = "select * from customers where email='$email' and password='$password'";
    $result=mysqli_query($db,$sql);
    $count=mysqli_num_rows($result);
    http_response_code(200);
    if($count>0){
     
      
      $successMessage = "Logged in Successfull";

      echo json_encode($successMessage);
      
      
    }else{
      $failureMessage = "Invalid Username and Password";

      echo json_encode($failureMessage);
      
    }
    
    
// if ($db->query($sql) === TRUE) {
//     http_response_code(200);
//   } else {
//     echo "Error: " . $sql . "<br>" . $db->error;
//   }
    // if(mysqli_query($db,$sql)){
    //     http_response_code(200);
    // }
    // else{http_response_code(422);
    // }

}
?>