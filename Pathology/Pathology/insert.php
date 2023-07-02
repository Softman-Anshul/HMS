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
error_log(print_r($request, TRUE));
//senitize
$id        = mysqli_real_escape_string($con, trim($request->id));
$firstname = mysqli_real_escape_string($con, trim($request->firstname));
$lastname  = mysqli_real_escape_string($con, trim($request->lastname));


$sql = "INSERT INTO tbl_user1 (id,firstname,lastname)
VALUES
({$id},'{$firstname}','{$lastname}')";
if(mysqli_query($con,$sql))
{
    http_response_code(201);
}
else{
    http_response_code(422);
    }

}


    ?>