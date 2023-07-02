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
$stuserid = mysqli_real_escape_string($con, trim($request->stuserid));
$stpassword = mysqli_real_escape_string($con, trim($request->stpassword));
$stusername = mysqli_real_escape_string($con, trim($request->stusername));
$department = mysqli_real_escape_string($con, trim($request->department));

$sql = "INSERT INTO logindetails (stuserid,stpassword,stusername,department)
VALUES ('{$stuserid}','{$stpassword}','{$stusername}','{$department}')";

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