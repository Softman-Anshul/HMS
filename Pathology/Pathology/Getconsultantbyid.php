<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$id =$_GET['id'];
$sql = "SELECT * FROM dctrinfo WHERE dctID = '{$id}' LIMIT 1";
//error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {

$dctrinfo[$cr]['dctID'] = $row['dctID'];
$dctrinfo[$cr]['dctName'] = $row['dctName'];
$dctrinfo[$cr]['dctDOB'] = $row['dctDOB'];
$dctrinfo[$cr]['dctMobile'] = $row['dctMobile'];
$dctrinfo[$cr]['dctEmail'] = $row['dctEmail'];
$dctrinfo[$cr]['dctCity'] = $row['dctCity'];
$dctrinfo[$cr]['dctSplzn'] = $row['dctSplzn'];
$dctrinfo[$cr]['dctAdrs1'] = $row['dctAdrs1'];
$dctrinfo[$cr]['dctAdrs2'] = $row['dctAdrs2'];
$dctrinfo[$cr]['dctSex'] = $row['dctSex'];
$dctrinfo[$cr]['dctType'] = $row['dctType'];
$dctrinfo[$cr]['digree'] = $row['digree'];
$dctrinfo[$cr]['roomno'] = $row['roomno'];
$dctrinfo[$cr]['morning'] = $row['morning'];
$dctrinfo[$cr]['evening'] = $row['evening'];
$dctrinfo[$cr]['Night'] = $row['Night'];
$dctrinfo[$cr]['oncall'] = $row['oncall'];
$dctrinfo[$cr]['digree1'] = $row['digree1'];
$dctrinfo[$cr]['department'] = $row['department'];
$dctrinfo[$cr]['presmessage'] = $row['presmessage'];
$dctrinfo[$cr]['epres'] = $row['epres'];
$dctrinfo[$cr]['digree2'] = $row['digree2'];
$dctrinfo[$cr]['digree3'] = $row['digree3'];
$dctrinfo[$cr]['mobileprint'] = $row['mobileprint'];
$dctrinfo[$cr]['opdcharges'] = $row['opdcharges'];
$dctrinfo[$cr]['Emergency'] = $row['Emergency'];
$dctrinfo[$cr]['validday'] = $row['validday'];

    $cr++;
    }

  // print_r($tbl_consultant);

    echo json_encode($dctrinfo);
}
else{
    http_response_code(404);
    }
    ?>