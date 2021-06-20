<?php
/**
 * Inserts the login data.
 */
require 'database.php';

$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST) && !empty($_POST) ){
    $name= $_POST['name'];
    $email= $_POST['email'];
    $phone= $_POST['phone'];
    $sql = "INSERT INTO `user`(name,email,phone) VALUES('{$name}','{$email}', '{$phone}')";
      $result = mysqli_query($con,$sql);
      if($result == 1){
          echo json_encode("success");
      }else{
        echo json_encode("failure");
      }

}else{
    var_dump($_POST);
    echo json_encode("Only POST method is accepted...");
}
// $policies = [];


?>