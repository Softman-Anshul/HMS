<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$tbl_consultant = [];
$sql = "SELECT * FROM tbl_consultant";

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $tbl_consultant[$cr]['doctor_id'] = $row['doctorid'];
    $tbl_consultant[$cr]['doctor_name'] = $row['doctor_name'];
    $tbl_consultant[$cr]['doctor_digree'] = $row['doctor_digree'];
    $tbl_consultant[$cr]['doctor_digree1'] = $row['doctor_digree1'];
    $tbl_consultant[$cr]['doctor_mobile'] = $row['doctor_mobile'];
    $tbl_consultant[$cr]['doctor_hospital'] = $row['doctor_hospital'];
    $tbl_consultant[$cr]['doctor_place'] = $row['doctor_place'];

    $cr++;
    }

    //print_r($tbl_user1);

    echo json_encode($tbl_consultant);
}
else{
    http_response_code(404);
    }

    ?>