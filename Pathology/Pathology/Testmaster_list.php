<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$lab_test_master = [];
$sql = "SELECT * FROM lab_test_master ORDER BY testname";

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $lab_test_master[$cr]['Testid'] = $row['Testid'];
    $lab_test_master[$cr]['testgroup'] = $row['testgroup'];
    $lab_test_master[$cr]['TestName'] = $row['TestName'];
    $lab_test_master[$cr]['Testcode'] = $row['Testcode'];
    $lab_test_master[$cr]['TestType'] = $row['TestType'];
    $lab_test_master[$cr]['subgroup'] = $row['subgroup'];
    $lab_test_master[$cr]['Unit'] = $row['Unit'];
    $lab_test_master[$cr]['ReportDays'] = $row['ReportDays'];
    $lab_test_master[$cr]['Price'] = $row['Price'];
    $lab_test_master[$cr]['Remarks'] = $row['Remarks'];
    $lab_test_master[$cr]['printseprate'] = $row['printseprate'];

    $cr++;
    }

    //print_r($tbl_user1);

    echo json_encode($lab_test_master);
}
else{
    http_response_code(404);
    }

    ?>