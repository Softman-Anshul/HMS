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
$Testid = mysqli_real_escape_string($con, trim($request->Testid));
$testgroup = mysqli_real_escape_string($con, trim($request->testgroup));
$TestName = mysqli_real_escape_string($con, trim($request->TestName));
$Testcode = mysqli_real_escape_string($con, trim($request->Testcode));
$TestTye = mysqli_real_escape_string($con, trim($request->TestType));
$subgroup = mysqli_real_escape_string($con, trim($request->subgroup));
$Unit = mysqli_real_escape_string($con, trim($request->Unit));
$ReportDays = mysqli_real_escape_string($con, trim($request->$ReportDays));
$Price = mysqli_real_escape_string($con, trim($request->Price));
$Remarks = mysqli_real_escape_string($con, trim($request->Remarks));
$printseprate = mysqli_real_escape_string($con, trim($request->printseprate));

$sql = "INSERT INTO lab_test_master (Testid,testgroup,TestName,Testcode,subgroup,Unit,ReportDays,Price,Remarks,printseprate)
VALUES
('{$Testid}','{$testgroup}','{$TestName}','{$Testcode}','{$subgroup}','{$Unit}','{$ReportDays}','{$Price}','{$Remarks}','{$printseprate}')";
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