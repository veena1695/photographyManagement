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
$flag = $_POST['flag'];

// switch case
if($flag=='user-dash'){
  $sql = "SELECT * FROM member LIMIT 8 OFFSET {$offset}";
}else if($flag == 'member'){
  $sql = "SELECT * FROM member where mid='{$ses}'";
}else if($flag == 'all_mem'){
  $sql = "SELECT * FROM member LIMIT 50 OFFSET {$offset}";
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