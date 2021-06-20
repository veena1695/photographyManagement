<?php
/**
 * Inserts the login data.
 */
require 'database.php';

$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST) && !empty($_POST) ){
    $username= $_POST['username'];
    $password= $_POST['password'];
    $uid= $_POST['uid'];
    $mid= $_POST['mid'];
    if( $mid != 0){
      $sql = "INSERT INTO `login`(username,password,mid) VALUES('{$username}', '{$password}','{$mid}')";
    }else{
      $sql = "INSERT INTO `login`(username,password,uid) VALUES('{$username}', '{$password}','{$uid}')";
    }
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