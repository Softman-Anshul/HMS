<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$sql = "SELECT * FROM lab_test_word ";
// error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   while ($row = mysqli_fetch_assoc($result))
   {
    if(empty($tbl_consultant[$row['Wordcode']])){
      $tbl_consultant[$row['Wordcode']] = array();
    }
    array_push($tbl_consultant[$row['Wordcode']],$row['Wordname']);
   
  }
    echo json_encode($tbl_consultant);
}
else{
    http_response_code(404);
    }
    ?>