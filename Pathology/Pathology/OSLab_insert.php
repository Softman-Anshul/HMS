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
$labid = mysqli_real_escape_string($con, trim($request->labid));
$labname = mysqli_real_escape_string($con, trim($request->labname));
$area = mysqli_real_escape_string($con, trim($request->area));
$cboy = mysqli_real_escape_string($con, trim($request->cboy));
$mobile = mysqli_real_escape_string($con, trim($request->mobile));
$labtype = mysqli_real_escape_string($con, trim($request->labtype));


$sql = "INSERT INTO lab_labname (labname,area,cboy,mobile,labtype)
VALUES
('{$labname}','{$area}','{$cboy}','{$mobile}','{$labtype}')";
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