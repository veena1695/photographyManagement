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
    $state= $_POST['state'];
    $city= $_POST['city'];
    $about= $_POST['about'];
    $address= $_POST['address'];
    $photoStyle= $_POST['photoStyle'];
    $type= $_POST['type'];
    $id= $_POST['id'];
    if($type == 'update'){
        $sql = "UPDATE `member` SET name='{$name}',email='{$email}',phone='{$phone}',state='{$state}',city='{$city}',about='{$about}',address='{$address}',photoStyle='{$photoStyle}' where `mid`='{$id}'";
    }else{
        $sql = "INSERT INTO `member`(name,email,phone,state,city,about,address,photoStyle) VALUES('{$name}','{$email}', '{$phone}','{$state}','{$city}','{$about}','{$address}','{$photoStyle}')";
    }
      $result = mysqli_query($con,$sql);
      if($result > 0){
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