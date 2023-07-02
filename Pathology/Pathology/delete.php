<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$vchrNo =$_GET['vchrNo'];
$vchrDate =$_GET['vchrDate'];

$sql = "DELETE FROM pntpaymentheads WHERE vchrNo = '{$vchrNo}' and vchrDate = '{$vchrDate}' ";

if(mysqli_query($con,$sql))
{
    $sql1 = "DELETE FROM pntpaymentdetails WHERE vchrNo = '{$vchrNo}' and chrgsDate = '{$vchrDate}' ";
    if(mysqli_query($con,$sql1))
    {
       // error_reporting($sql1);
    http_response_code(204);
    }
}
else{
    http_response_code(422);
    }

    ?>