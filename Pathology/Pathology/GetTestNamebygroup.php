<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$id =$_GET['id'];

$sql = "SELECT Testcode,TestName,Price FROM lab_test_master WHERE testgroup = '{$id}' ";
//error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $lab_test_master[$cr]['Testcode'] = $row['Testcode'];
    $lab_test_master[$cr]['TestName'] = $row['TestName'];
    $lab_test_master[$cr]['Price'] = $row['Price'];

    $cr++;
    }

  // print_r($tbl_consultant);

    echo json_encode($lab_test_master);
}
else{
    http_response_code(404);
    }
    ?>