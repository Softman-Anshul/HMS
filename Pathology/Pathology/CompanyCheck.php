<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$id =$_GET['id'];
$sql = "SELECT * FROM master_mcompany WHERE Comp_nam = '{$id}' LIMIT 1";
//error_log(print_r($sql, TRUE));
if(mysqli_query($con,$sql))
{
    http_response_code(204);
}
else{
    http_response_code(422);
    }

    ?>