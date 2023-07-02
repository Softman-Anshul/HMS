<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$sql = "SELECT Max(Testid) as Testid FROM lab_test_master";
//error_log(print_r($sql, TRUE));
if($result = mysqli_query($con,$sql))
{
    $cr = 1;
    $lab_test_master = mysqli_fetch_assoc($result);
    if(is_null($lab_test_master))
    {
        echo json_encode($cr+1);  
    }
    else
    {
        echo json_encode($lab_test_master['Testid']+1);
    }

}
else{
    http_response_code(404);
    }

    ?>