<?php
/**
 * ???????????????
 */
require 'database.php';
session_start();
$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST) && !empty($_POST) ){
    $name= $_POST['name'];
    $phone= $_POST['phone'];
    $email= $_POST['email'];
    $mid= $_POST['mid'];
    $type= $_POST['type'];
    $status= $_POST['status'];
    if($type == 'member'){
        $sql = "INSERT INTO `requests`(name,phone,email,mid,type,status) VALUES('{$name}', '{$phone}','{$email}','{$mid}','{$type}','{$status}')";
    }else{
        $sql = "INSERT INTO `requests`(name,phone,email,mid,type,status,reqdate,details,uid) VALUES('{$name}', '{$phone}','{$email}','{$mid}','{$type}','{$status}','{$_POST["date"]}','{$_POST["details"]}','{$_SESSION["id"]}')";
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