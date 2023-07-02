<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$id =$_GET['id'];
$sql = "SELECT * FROM caseinfo WHERE caseID = {$id} LIMIT 1";
//error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $caseinfo[$cr]['caseID'] = $row['caseID'];
    $caseinfo[$cr]['caseType'] = $row['caseType'];
    $caseinfo[$cr]['dprtmnt'] = $row['dprtmnt'];
    
    $cr++;
    }

   //print_r($tbl_department);

    echo json_encode($caseinfo);
}
else{
    http_response_code(404);
    }
    ?>