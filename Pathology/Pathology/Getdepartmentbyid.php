<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$id =$_GET['id'];
$sql = "SELECT * FROM tbl_department WHERE dep_id = {$id} LIMIT 1";
//error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $tbl_department[$cr]['dep_id'] = $row['dep_id'];
    $tbl_department[$cr]['dep_type'] = $row['dep_type'];
    $tbl_department[$cr]['dep_name'] = $row['dep_name'];
    
    $cr++;
    }

   //print_r($tbl_department);

    echo json_encode($tbl_department);
}
else{
    http_response_code(404);
    }
    ?>