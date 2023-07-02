<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$tbl_group = [];
$sql = "SELECT * FROM tbl_group";

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $tbl_group[$cr]['group_id'] = $row['group_id'];
    $tbl_group[$cr]['dep_name'] = $row['dep_name'];
    $tbl_group[$cr]['group_name'] = $row['group_name'];
    $tbl_group[$cr]['sno'] = $row['sno'];
   
    $cr++;
    }

    //print_r($tbl_user1);

    echo json_encode($tbl_group);
}
else{
    http_response_code(404);
    }

    ?>