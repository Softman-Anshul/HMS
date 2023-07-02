<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$id =$_GET['id'];
$sql = "SELECT * FROM master_city WHERE cityid = {$id} LIMIT 1";
//error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $master_city[$cr]['cityid'] = $row['cityid'];
    $master_city[$cr]['citynam'] = $row['citynam'];
    $master_city[$cr]['citytop'] = $row['citytop'];
    
    $cr++;
    }

   //print_r($tbl_department);

    echo json_encode($master_city);
}
else{
    http_response_code(404);
    }
    ?>