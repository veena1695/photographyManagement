<?php
/**
 * Returns the list of policies.
 */
session_start();

require 'database.php';

$_POST = json_decode(file_get_contents('php://input'),true);
$flag = $_POST['flag'];
$id = $_POST['id'];
$type = $_POST['type'];
$ses = $_SESSION['id'];
$policies = [];
//switch case
if($flag == 'admin-side'){
    $sql = "SELECT * FROM requests where type='member'";
}else if($flag == 'user-side'){
    $sql = "SELECT r.rid,r.status,r.reqdate,r.details,m.name,m.mid FROM requests r,member m where type='{$type}' and uid='{$ses}' and r.mid = m.mid";
}else{
    $sql = "SELECT * FROM requests where type='{$type}' and {$id} = '{$ses}' ";
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