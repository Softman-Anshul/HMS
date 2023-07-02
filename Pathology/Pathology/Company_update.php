<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata) )
{
$request = json_decode($postdata);
//senitize
$Comp_add = mysqli_real_escape_string($con, trim($request->Comp_add));
$Comp_add1 = mysqli_real_escape_string($con, trim($request->Comp_add1));
$Comp_city = mysqli_real_escape_string($con, trim($request->Comp_city));
$Comp_Phon = mysqli_real_escape_string($con, trim($request->Comp_Phon));
$Comp_Short_nam = mysqli_real_escape_string($con, trim($request->Comp_Short_nam));
$email = mysqli_real_escape_string($con, trim($request->email));


$sql = "UPDATE master_mcompany SET Comp_add = '{$Comp_add}', Comp_add1 = '{$Comp_add1}', 
Comp_city = '{$Comp_city}', Comp_Phon= '{$Comp_Phon}',
Comp_Short_nam = '{$Comp_Short_nam}', email = '{$email}' ";

error_log(print_r($sql, TRUE));
if(mysqli_query($con,$sql))
{
    http_response_code(201);
}
else{
    http_response_code(422);
    }

}
    ?>