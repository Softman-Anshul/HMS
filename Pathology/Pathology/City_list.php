<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$Master_City = [];
$sql = "SELECT * FROM Master_City";

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $Master_City[$cr]['cityid'] = $row['cityid'];
    $Master_City[$cr]['citynam'] = $row['citynam'];
    $Master_City[$cr]['citytop'] = $row['citytop'];
   
    $cr++;
    }

    //print_r($tbl_user1);

    echo json_encode($Master_City);
}
else{
    http_response_code(404);
    }

    ?>