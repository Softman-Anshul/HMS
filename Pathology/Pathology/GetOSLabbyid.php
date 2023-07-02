<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$id =$_GET['id'];
$sql = "SELECT * FROM lab_labname WHERE labid = {$id} LIMIT 1";
//error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $lab_labname[$cr]['labid'] = $row['labid'];
    $lab_labname[$cr]['labname'] = $row['labname'];
    $lab_labname[$cr]['area'] = $row['area'];
    $lab_labname[$cr]['cboy'] = $row['cboy'];
    $lab_labname[$cr]['mobile'] = $row['mobile'];
    $lab_labname[$cr]['labtype'] = $row['labtype'];
    
    $cr++;
    }

   //print_r($tbl_department);

    echo json_encode($lab_labname);
}
else{
    http_response_code(404);
    }
    ?>