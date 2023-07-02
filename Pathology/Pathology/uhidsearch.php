<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$search =$_GET['search'];

$sql = "SELECT * FROM pntpaymentheads WHERE del = 'Run' and uhID = {$search} ";

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $pntpaymentheads[$cr]['uhID'] = $row['uhID'];
    $pntpaymentheads[$cr]['PntName'] = $row['PntName'];
    $pntpaymentheads[$cr]['Pntgname'] = $row['Pntgname'];
    $pntpaymentheads[$cr]['pntadd'] = $row['pntadd'];
    $pntpaymentheads[$cr]['pntcity'] = $row['pntcity'];
    $pntpaymentheads[$cr]['pntmobile'] = $row['pntmobile'];
    $pntpaymentheads[$cr]['pntage'] = $row['pntage'];
    $pntpaymentheads[$cr]['pntsex'] = $row['pntsex'];
    $pntpaymentheads[$cr]['pntyears'] = $row['pntyears'];
    $pntpaymentheads[$cr]['condoctor'] = $row['condoctor'];
    $pntpaymentheads[$cr]['pntn'] = $row['pntn'];
    $pntpaymentheads[$cr]['pntg'] = $row['pntg'];
    $pntpaymentheads[$cr]['email'] = $row['email'];

    $cr++;
}
    echo json_encode($pntpaymentheads);
}
else{
    http_response_code(404);
    }

    ?>