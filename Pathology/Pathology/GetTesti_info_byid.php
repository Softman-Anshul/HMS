<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$id =$_GET['id'];
$sql = "SELECT * FROM pntpaymentheads WHERE vchrNo = {$id} LIMIT 1";
//error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $pntpaymentheads[$cr]['vchrNo'] = $row['vchrNo'];
    $pntpaymentheads[$cr]['vchrDate'] = $row['vchrDate'];
    $pntpaymentheads[$cr]['pntn'] = $row['pntn'];
    $pntpaymentheads[$cr]['PntName'] = $row['PntName'];
    $pntpaymentheads[$cr]['pntage'] = $row['pntage'];
    $pntpaymentheads[$cr]['pntsex'] = $row['pntsex'];
    $pntpaymentheads[$cr]['pntyears'] = $row['pntyears'];
    $pntpaymentheads[$cr]['pntg'] = $row['pntg'];
    $pntpaymentheads[$cr]['Pntgname'] = $row['Pntgname'];
    $pntpaymentheads[$cr]['condoctor'] = $row['condoctor'];
    $pntpaymentheads[$cr]['uhID'] = $row['uhID'];
    $pntpaymentheads[$cr]['labto'] = $row['labto'];
    $pntpaymentheads[$cr]['pntmobile'] = $row['pntmobile'];
    $pntpaymentheads[$cr]['grandTotal'] = $row['grandTotal'];
    $pntpaymentheads[$cr]['discountAmt'] = $row['discountAmt'];
    $pntpaymentheads[$cr]['balamt'] = $row['balamt'];
    $pntpaymentheads[$cr]['recamt'] = $row['recamt'];
    $pntpaymentheads[$cr]['uname'] = $row['uname'];
   

    $cr++;
    }

   //print_r($tbl_department);

    echo json_encode($pntpaymentheads);
}
else{
    http_response_code(404);
    }
    ?>