<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata) )
{
$request = json_decode($postdata);
//senitize
$vchrNo = mysqli_real_escape_string($con, trim($request->vchrNo));
$vchrDate = mysqli_real_escape_string($con, trim($request->vchrDate));
$refund = mysqli_real_escape_string($con, trim($request->refund));
//$recamt = mysqli_real_escape_string($con, trim($request->recamt));


$sql = "UPDATE pntpaymentheads SET refund = {$refund},recamt=recamt-{$refund} 
WHERE vchrNo = '{$vchrNo}' and vchrDate = '{$vchrDate}'  ";

//error_log(print_r($sql, TRUE));
if(mysqli_query($con,$sql))
{
    http_response_code(201);
}
else{
    http_response_code(422);
    }

}


    ?>