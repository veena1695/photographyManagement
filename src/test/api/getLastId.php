<?php
/**
 * Returns the list of policies.
 */
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'),true);
$type = $_POST['type'];
$policies = [];
$sql = "SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'mydb' AND TABLE_NAME = '{$type}'";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $policies[$i]['id'] = $row['AUTO_INCREMENT'];
    // $policies[$i]['password'] = $row['password'];
    $i++;
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}

?>