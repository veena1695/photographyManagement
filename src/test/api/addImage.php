<?php

require 'database.php';

$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST) && !empty($_POST) ){
    $id= $_POST['id'];
    $url= $_POST['url'];
    $sql = "INSERT INTO `images` VALUES('{$url}', '{$id}')";
      $result = mysqli_query($con,$sql);
      if($result == 1){
          echo json_encode("success");
      }else{
        echo json_encode($url);
      }

}else{
    var_dump($_POST);
    echo json_encode("Only POST method is accepted...");
}
// $policies = [];


?>