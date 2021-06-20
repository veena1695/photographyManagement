<?php
/**
 * Returns the list of policies.
 */
session_start();

require 'database.php';

$_POST = json_decode(file_get_contents('php://input'),true);
$id = $_POST['id'];
$policies = [];
$offset = $_POST['offset'];
$ses = $_SESSION['id'];
if($id==0){
  $sql = "SELECT * FROM user LIMIT 8 OFFSET {$offset}";
}else{
  $sql = "SELECT * FROM user where uid='{$ses}'";
}

if($result = mysqli_query($con,$sql))
{
  $newArr=[];
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $newArr[$i] =$row;
    $i++;
  }
  echo json_encode($newArr);
}
else
{
  http_response_code(404);
}

?>