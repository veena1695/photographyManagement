<?php
/**
 * Inserts the login data.
 */
require 'database.php';

$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST) && !empty($_POST) ){
    $charges= $_POST['charges'];
    $vcharges= $_POST['vcharges'];
    $mid= $_POST['mid'];
    if( $mid != 0){
      $sql = "update `member` set charges='{$charges}',vidCharges='{$vcharges}' where mid='{$mid}'";
    }else{
        echo json_encode("failure");
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