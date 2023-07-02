<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$pntpaymentheads = [];
$sql = "SELECT * FROM pntpaymentheads WHERE vchrDate = CURRENT_DATE() ORDER BY vchrNo DESC";
//error_reporting($sql);
if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $pntpaymentheads[$cr]['vchrNo'] = $row['vchrNo'];
    $pntpaymentheads[$cr]['vchrDate'] = $row['vchrDate'];
    $pntpaymentheads[$cr]['vchrTime'] = $row['vchrTime'];
    $pntpaymentheads[$cr]['Sno'] = $row['Sno'];
    $pntpaymentheads[$cr]['discountAmt'] = $row['discountAmt'];
    $pntpaymentheads[$cr]['grandTotal'] = $row['grandTotal'];
    $pntpaymentheads[$cr]['dcmntNo'] = $row['dcmntNo'];
    $pntpaymentheads[$cr]['dcmntType'] = $row['dcmntType'];
    $pntpaymentheads[$cr]['uhID'] = $row['uhID'];
    $pntpaymentheads[$cr]['Reporttype'] = $row['Reporttype'];
    $pntpaymentheads[$cr]['prnyes'] = $row['prnyes'];
    $pntpaymentheads[$cr]['printdate'] = $row['printdate'];
    $pntpaymentheads[$cr]['Years'] = $row['Years'];
    $pntpaymentheads[$cr]['uname'] = $row['uname'];
    $pntpaymentheads[$cr]['balamt'] = $row['balamt'];
    $pntpaymentheads[$cr]['ipdno'] = $row['ipdno'];
    $pntpaymentheads[$cr]['mark'] = $row['mark'];
    $pntpaymentheads[$cr]['dismode'] = $row['dismode'];
    $pntpaymentheads[$cr]['dismodeby'] = $row['dismodeby'];
    $pntpaymentheads[$cr]['del'] = $row['del'];
    $pntpaymentheads[$cr]['PntName'] = $row['PntName'];
    $pntpaymentheads[$cr]['Pntgname'] = $row['Pntgname'];
    $pntpaymentheads[$cr]['pntadd'] = $row['pntadd'];
    $pntpaymentheads[$cr]['pntcity'] = $row['pntcity'];
    $pntpaymentheads[$cr]['pntmobile'] = $row['pntmobile'];
    $pntpaymentheads[$cr]['pntage'] = $row['pntage'];
    $pntpaymentheads[$cr]['pntsex'] = $row['pntsex'];
    $pntpaymentheads[$cr]['pntyears'] = $row['pntyears'];
    $pntpaymentheads[$cr]['condoctor'] = $row['condoctor'];
    $pntpaymentheads[$cr]['refby'] = $row['refby'];
    $pntpaymentheads[$cr]['billamt'] = $row['billamt'];
    $pntpaymentheads[$cr]['labto'] = $row['labto'];
    $pntpaymentheads[$cr]['markdt'] = $row['markdt'];
    $pntpaymentheads[$cr]['pntn'] = $row['pntn'];
    $pntpaymentheads[$cr]['pntg'] = $row['pntg'];
    $pntpaymentheads[$cr]['discountby'] = $row['discountby'];
    $pntpaymentheads[$cr]['doctype'] = $row['doctype'];
    $pntpaymentheads[$cr]['typeno'] = $row['typeno'];
    $pntpaymentheads[$cr]['recamt'] = $row['recamt'];
    $pntpaymentheads[$cr]['stat'] = $row['stat'];
    $pntpaymentheads[$cr]['email'] = $row['email'];
    $pntpaymentheads[$cr]['disper'] = $row['disper'];
    $pntpaymentheads[$cr]['paymode'] = $row['paymode'];
    $pntpaymentheads[$cr]['narration'] = $row['narration'];
    $pntpaymentheads[$cr]['labtype'] = $row['labtype'];
    $pntpaymentheads[$cr]['pntyrs'] = $row['pntyrs'];
    $pntpaymentheads[$cr]['disresion'] = $row['disresion'];
    $pntpaymentheads[$cr]['disname'] = $row['disname'];
    $pntpaymentheads[$cr]['refund'] = $row['refund'];
    $pntpaymentheads[$cr]['printtime'] = $row['printtime'];
    $pntpaymentheads[$cr]['cantime'] = $row['cantime'];
    $pntpaymentheads[$cr]['sampletype'] = $row['sampletype'];
    $pntpaymentheads[$cr]['disp'] = $row['disp'];
    $pntpaymentheads[$cr]['duerec'] = $row['duerec'];



    $cr++;
    }

     echo json_encode($pntpaymentheads);
}
else{
    http_response_code(404);
    }

    ?>