<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$dctrInfo = [];
$sql = "SELECT * FROM dctrInfo WHERE dctname <> 'Self'";

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $dctrInfo[$cr]['dctID'] = $row['dctID'];
    $dctrInfo[$cr]['dctName'] = $row['dctName'];
    $dctrInfo[$cr]['dctDOB'] = $row['dctDOB'];
    $dctrInfo[$cr]['dctMobile'] = $row['dctMobile'];
    $dctrInfo[$cr]['dctEmail'] = $row['dctEmail'];
    $dctrInfo[$cr]['dctCity'] = $row['dctCity'];
    $dctrInfo[$cr]['dctSplzn'] = $row['dctSplzn'];
    $dctrInfo[$cr]['dctAdrs1'] = $row['dctAdrs1'];
    $dctrInfo[$cr]['dctAdrs2'] = $row['dctAdrs2'];
    $dctrInfo[$cr]['dctSex'] = $row['dctSex'];
    $dctrInfo[$cr]['dctType'] = $row['dctType'];
    $dctrInfo[$cr]['digree'] = $row['digree'];
    $dctrInfo[$cr]['roomno'] = $row['roomno'];
    $dctrInfo[$cr]['morning'] = $row['morning'];
    $dctrInfo[$cr]['evening'] = $row['evening'];
    $dctrInfo[$cr]['Night'] = $row['Night'];
    $dctrInfo[$cr]['oncall'] = $row['oncall'];
    $dctrInfo[$cr]['digree1'] = $row['digree1'];
    $dctrInfo[$cr]['department'] = $row['department'];
    $dctrInfo[$cr]['presmessage'] = $row['presmessage'];
    $dctrInfo[$cr]['epres'] = $row['epres'];
    $dctrInfo[$cr]['digree2'] = $row['digree2'];
    $dctrInfo[$cr]['digree3'] = $row['digree3'];
    $dctrInfo[$cr]['mobileprint'] = $row['mobileprint'];
    $dctrInfo[$cr]['opdcharges'] = $row['opdcharges'];
    $dctrInfo[$cr]['Emergency'] = $row['Emergency'];
    $dctrInfo[$cr]['validday'] = $row['validday'];

    $cr++;
    }

    //print_r($tbl_user1);

    echo json_encode($dctrInfo);
}
else{
    http_response_code(404);
    }

    ?>