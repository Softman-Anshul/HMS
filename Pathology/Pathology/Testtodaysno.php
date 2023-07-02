<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$sql = "SELECT Max(sno)+1 as Sno FROM pntpaymentheads WHERE vchrDate = CURRENT_DATE()";

if($result = mysqli_query($con,$sql))
{
    $pntpaymentheads = mysqli_fetch_assoc($result);
    if(is_null($pntpaymentheads['Sno'])){
        $pntpaymentheads['Sno'] = 1;
    }
    echo json_encode($pntpaymentheads);  
}
else{
    http_response_code(404);
    }

    ?>