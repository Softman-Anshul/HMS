<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$vchrNo = $_GET['vchrNo'];
$vchrDate = $_GET['vchrDate'];
$sql = "SELECT * FROM lab_test_subvalue WHERE docno = '{$vchrNo}' and docdate= '{$vchrDate}' ";
//error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $lab_test_subvalue[$row['testname']]['value'] = $row['value'];
    $lab_test_subvalue[$row['testname']]['interpet'] = $row['interpet'];
    $lab_test_subvalue[$row['testname']]['comments'] = $row['comments'];
    
    $cr++;
    }

    if($cr > 0){
        echo json_encode($lab_test_subvalue);
    } else {
        http_response_code(404);
    }
}
else{
    http_response_code(404);
    }
    ?>