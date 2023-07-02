<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$vno =$_GET['vchrNo'];
$vdt =$_GET['vchrDate'];
$sql = "SELECT * FROM pntPaymentHeads WHERE vchrNo = '{$vno}' and vchrDate= '{$vdt}' ";
error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $pntPaymentHeads[$cr]['vchrNo'] = $row['vchrNo'];
    $pntPaymentHeads[$cr]['vchrDate'] = $row['vchrDate'];
    $pntPaymentHeads[$cr]['vchrTime'] = $row['vchrTime'];
    $pntPaymentHeads[$cr]['Sno'] = $row['Sno'];
    $pntPaymentHeads[$cr]['discountAmt'] = $row['discountAmt'];
    $pntPaymentHeads[$cr]['grandTotal'] = $row['grandTotal'];
    $pntPaymentHeads[$cr]['dcmntNo'] = $row['dcmntNo'];
    $pntPaymentHeads[$cr]['dcmntType'] = $row['dcmntType'];
    $pntPaymentHeads[$cr]['uhID'] = $row['uhID'];
    $pntPaymentHeads[$cr]['Reporttype'] = $row['Reporttype'];
    $pntPaymentHeads[$cr]['prnyes'] = $row['prnyes'];
    $pntPaymentHeads[$cr]['printdate'] = $row['printdate'];
    $pntPaymentHeads[$cr]['Years'] = $row['Years'];
    $pntPaymentHeads[$cr]['uname'] = $row['uname'];
    $pntPaymentHeads[$cr]['balamt'] = $row['balamt'];
    $pntPaymentHeads[$cr]['ipdno'] = $row['ipdno'];
    $pntPaymentHeads[$cr]['mark'] = $row['mark'];
    $pntPaymentHeads[$cr]['dismode'] = $row['dismode'];
    $pntPaymentHeads[$cr]['dismodeby'] = $row['dismodeby'];
    $pntPaymentHeads[$cr]['del'] = $row['del'];
    $pntPaymentHeads[$cr]['PntName'] = $row['PntName'];
    $pntPaymentHeads[$cr]['Pntgname'] = $row['Pntgname'];
    $pntPaymentHeads[$cr]['pntadd'] = $row['pntadd'];
    $pntPaymentHeads[$cr]['pntcity'] = $row['pntcity'];
    $pntPaymentHeads[$cr]['pntmobile'] = $row['pntmobile'];
    $pntPaymentHeads[$cr]['pntage'] = $row['pntage'];
    $pntPaymentHeads[$cr]['pntsex'] = $row['pntsex'];
    $pntPaymentHeads[$cr]['pntyears'] = $row['pntyears'];
    $pntPaymentHeads[$cr]['condoctor'] = $row['condoctor'];
    $pntPaymentHeads[$cr]['refby'] = $row['refby'];
    $pntPaymentHeads[$cr]['billamt'] = $row['billamt'];
    $pntPaymentHeads[$cr]['labto'] = $row['labto'];
    $pntPaymentHeads[$cr]['markdt'] = $row['markdt'];
    $pntPaymentHeads[$cr]['pntn'] = $row['pntn'];
    $pntPaymentHeads[$cr]['pntg'] = $row['pntg'];
    $pntPaymentHeads[$cr]['discountby'] = $row['discountby'];
    $pntPaymentHeads[$cr]['doctype'] = $row['doctype'];
    $pntPaymentHeads[$cr]['typeno'] = $row['typeno'];
    $pntPaymentHeads[$cr]['recamt'] = $row['recamt'];
    $pntPaymentHeads[$cr]['stat'] = $row['stat'];
    $pntPaymentHeads[$cr]['email'] = $row['email'];
    $pntPaymentHeads[$cr]['disper'] = $row['disper'];
    $pntPaymentHeads[$cr]['paymode'] = $row['paymode'];
    $pntPaymentHeads[$cr]['narration'] = $row['narration'];
    $pntPaymentHeads[$cr]['labtype'] = $row['labtype'];
    $pntPaymentHeads[$cr]['pntyrs'] = $row['pntyrs'];
    $pntPaymentHeads[$cr]['disresion'] = $row['disresion'];
    $pntPaymentHeads[$cr]['disname'] = $row['disname'];
    $pntPaymentHeads[$cr]['refund'] = $row['refund'];
    $pntPaymentHeads[$cr]['printtime'] = $row['printtime'];
    $pntPaymentHeads[$cr]['cantime'] = $row['cantime'];
    $pntPaymentHeads[$cr]['sampletype'] = $row['sampletype'];
    $pntPaymentHeads[$cr]['disp'] = $row['disp'];
    $pntPaymentHeads[$cr]['duerec'] = $row['duerec'];

    

    $cr++;
    }

  // print_r($tbl_consultant);

    echo json_encode($pntPaymentHeads);
}
else{
    http_response_code(404);
    }
    ?>