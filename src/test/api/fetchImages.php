<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$_POST = json_decode(file_get_contents('php://input'),true);
$id = $_POST['id'];
$ids = $_POST['ids'];
if($ids!=0){ // condition changed

  //change the logic. make it dyanmic.
  switch(count($ids)){
    case 1 : 
      $sql = "SELECT * FROM images where mid='{$ids[0]}'";break;
    case 2 : 
      $sql = "SELECT * FROM images where mid in ({$ids[0]},{$ids[1]})";break;
    case 3 : 
      $sql = "SELECT * FROM images where mid in ({$ids[0]},{$ids[1]},{$ids[2]})";break;
    case 4 : 
      $sql = "SELECT * FROM images where mid in ({$ids[0]},{$ids[1]},{$ids[2]},{$ids[3]})";break;
    case 5 : 
      $sql = "SELECT * FROM images where mid in ({$ids[0]},{$ids[1]},{$ids[2]},{$ids[3]},{$ids[4]})";break;
    case 6 : 
      $sql = "SELECT * FROM images where mid in ({$ids[0]},{$ids[1]},{$ids[2]},{$ids[3]},{$ids[4]},{$ids[5]})";break;
    case 7 : 
      $sql = "SELECT * FROM images where mid in ({$ids[0]},{$ids[1]},{$ids[2]},{$ids[3]},{$ids[4]},{$ids[5]},{$ids[6]})";break;
    case 8 : 
      $sql = "SELECT * FROM images where mid in ({$ids[0]},{$ids[1]},{$ids[2]},{$ids[3]},{$ids[4]},{$ids[5]},{$ids[6]},{$ids[7]})";break;

  }
}else{
  $sql = "SELECT * FROM images where mid='{$id}'";
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
