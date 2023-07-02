<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$lab_test_Word = [];
$sql = "SELECT * FROM lab_test_Word";

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $lab_test_Word[$cr]['Wordcode'] = $row['Wordcode'];
    $lab_test_Word[$cr]['Wordname'] = $row['Wordname'];

    $cr++;
    }

    //print_r($tbl_user1);

    echo json_encode($lab_test_Word);
}
else{
    http_response_code(404);
    }

    ?>