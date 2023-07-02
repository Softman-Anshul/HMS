<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$search =$_GET['search'];
$dt1 =$_GET['Fromdt'];
$dt2=$_GET['Todt'];
$choice=$_GET['choice'];
if($choice == "ALL")
{
$sql = "SELECT * FROM pntpaymentheads WHERE del='Run' and  vchrDate >= '{$dt1}' and  vchrDate <= '{$dt2}'  ";
//error_log(print_r($sql, TRUE));
}
else if($choice == "Name")
{
$sql = "SELECT * FROM pntpaymentheads WHERE del='Run' and  pntName like '%{$search}%'  ";
}
else if($choice == "Age")
{
$sql = "SELECT * FROM pntpaymentheads WHERE del='Run' and  pntage = '{$search}'  ";
}
else if($choice == "Gender")
{
$sql = "SELECT * FROM pntpaymentheads WHERE del='Run' and  pntsex = '{$search}'  ";
}
else if($choice == "Phone")
{
$sql = "SELECT * FROM pntpaymentheads WHERE del='Run' and  pntmobile = '{$search}'  ";
}
else if($choice == "Consultant")
{
$sql = "SELECT * FROM pntpaymentheads WHERE del='Run' and  condoctor = '{$search}'  ";
}
else if($choice == "OutsideLab")
{
$sql = "SELECT * FROM pntpaymentheads WHERE del='Run' and  labto like '%{$search}%'  ";
}
else if($choice == "UHID")
{
$sql = "SELECT * FROM pntpaymentheads WHERE del='Run' and  UHID = '{$search}'   ";
}
else if($choice == "Not Print")
{
$sql = "SELECT * FROM pntpaymentheads WHERE del='Run' and  prnyes <> 'Y' AND labto = 'SELF' ";
}
else if($choice == "Delete")
{
$sql = "SELECT * FROM pntpaymentheads WHERE del <> 'Run' ";
}

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