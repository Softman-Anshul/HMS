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
foreach ($request->tests as $array) {

    $Testid = mysqli_real_escape_string($con, trim($request->Testid));
    $TestsubName = mysqli_real_escape_string($con, trim($array->TestsubName));
    $Testcode = mysqli_real_escape_string($con, trim($request->Testcode));
    $SubUnit = mysqli_real_escape_string($con, trim($array->SubUnit));
    $subPrice = mysqli_real_escape_string($con, trim($array->subPrice));
    $male = mysqli_real_escape_string($con, trim($array->male));
    $female = mysqli_real_escape_string($con, trim($array->female));
    $normalvalue = mysqli_real_escape_string($con, trim($array->normalvalue));
    $Remark = mysqli_real_escape_string($con, trim($array->Remark));
    $testorder = mysqli_real_escape_string($con, trim($array->testorder));
    $formula = mysqli_real_escape_string($con, trim($array->formula));
    $interpet = mysqli_real_escape_string($con, trim($array->interpet));
    $comments = mysqli_real_escape_string($con, trim($array->comments));
    $Ipet = mysqli_real_escape_string($con, trim($array->Ipet));
    $comt = mysqli_real_escape_string($con, trim($array->comt));
    $Wordcode = mysqli_real_escape_string($con, trim($array->Wordcode));
    $subgroup = mysqli_real_escape_string($con, trim($request->subgroup));
    
    $sql = "INSERT INTO lab_subtest_master (Testid,TestsubName,Testcode,SubUnit,male,female,normalvalue,
    Remark,testorder,testmasterid,formula,interpet,comments,ipet,comt,
    Wordcode,subgroup)
    VALUES
    ('{$Testid}','{$TestsubName}','{$Testcode}','{$SubUnit}','{$male}','{$female}','{$normalvalue}',
    '{$Remark}','{$testorder}','{$Testcode}','{$formula}','{$interpet}','{$comments}','{$Ipet}','{$comt}',
    '{$Wordcode}','{$subgroup}')";

    
    error_log(print_r($sql, TRUE));
    if(!mysqli_query($con,$sql))
    {    http_response_code(422);
        }
    
}
http_response_code(201);



}


    ?>