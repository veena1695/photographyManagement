<?php
/**
 * ??????????????????????????
 *  */
session_start();
 require 'database.php';


$_POST = json_decode(file_get_contents('php://input'),true);
$username= $_POST['username'];
$password= $_POST['password'];
$policies = [];

$sql = "SELECT * FROM `login` where username='{$username}' and password='{$password}'";
if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    // echo json_encode($row);
    $policies[$i]['username'] = $row['username'];
    $policies[$i]['password'] = $row['password'];
    $policies[$i]['uid'] = $row['uid'];
    $policies[$i]['mid'] = $row['mid'];
    $i++;
    if($row['mid']){
      $_SESSION['id'] = $row['mid'];
    }else{
      $_SESSION['id'] = $row['uid'];
    }
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}

?>