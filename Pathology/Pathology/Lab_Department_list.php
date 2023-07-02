<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$lab_master_department = [];
$sql = "SELECT * FROM lab_master_department";

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $lab_master_department[$cr]['depid'] = $row['depid'];
    $lab_master_department[$cr]['labtype'] = $row['labtype'];
    $lab_master_department[$cr]['depnam'] = $row['depnam'];
   
    $cr++;
    }

    //print_r($tbl_user1);

    echo json_encode($lab_master_department);
}
else{
    http_response_code(404);
    }

    ?>