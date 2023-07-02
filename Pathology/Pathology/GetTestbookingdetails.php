<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$vno =$_GET['vchrNo'];
$vdt =$_GET['chrgsDate'];
$pntpaymentdetails = [];
$sql = "SELECT * FROM pntpaymentdetails WHERE vchrNo = '{$vno}' and chrgsDate= '{$vdt}' ";
//error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $pntpaymentdetails[$cr]['itmName'] = $row['itmName'];
    $pntpaymentdetails[$cr]['itmChrgs'] = $row['itmChrgs'];
    $pntpaymentdetails[$cr]['itmQty'] = $row['itmQty'];
    $pntpaymentdetails[$cr]['itmDiscntPrsnt'] = $row['itmDiscntPrsnt'];
    $pntpaymentdetails[$cr]['totalAmt'] = $row['totalAmt'];
    $pntpaymentdetails[$cr]['discntAmt'] = $row['discntAmt'];
    $pntpaymentdetails[$cr]['chtype'] = $row['chtype'];
    $pntpaymentdetails[$cr]['Years'] = $row['discntAmt'];
    $pntpaymentdetails[$cr]['uname'] = $row['uname'];
    $pntpaymentdetails[$cr]['sno'] = $row['sno'];
    $pntpaymentdetails[$cr]['labto'] = $row['labto'];
    

    $cr++;
    }

  // print_r($tbl_consultant);

    echo json_encode($pntpaymentdetails);
}
else{
    http_response_code(404);
    }
    ?>