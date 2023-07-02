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
$group_id = mysqli_real_escape_string($con, trim($request->group_id));
$dep_name = mysqli_real_escape_string($con, trim($request->dep_name));
$group_name = mysqli_real_escape_string($con, trim($request->group_name));
$sno = mysqli_real_escape_string($con, trim($request->sno));


$sql = "UPDATE tbl_group set dep_name = '{$dep_name}',group_name = '{$group_name}',sno = '{$sno}'
 WHERE group_id = '{$group_id}'  ";

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