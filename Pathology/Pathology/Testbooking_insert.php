<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata) )
{
$request = json_decode($postdata);
//senitize
    $vchrNo= mysqli_real_escape_string($con, trim($request->vchrNo));
    $vchrDate= mysqli_real_escape_string($con, trim($request->vchrDate));
    $vchrTime= mysqli_real_escape_string($con, trim($request->vchrTime));
    $Sno= mysqli_real_escape_string($con, trim($request->Sno));
    $discountAmt= mysqli_real_escape_string($con, trim($request->discountAmt));
    $grandTotal= mysqli_real_escape_string($con, trim($request->grandTotal));
    $dcmntNo= mysqli_real_escape_string($con, trim($request->dcmntNo));
    $dcmntType= mysqli_real_escape_string($con, trim($request->dcmntType));
    $uhID= mysqli_real_escape_string($con, trim($request->uhID));
    $Reporttype= mysqli_real_escape_string($con, trim($request->Reporttype));
    $prnyes= mysqli_real_escape_string($con, trim($request->prnyes));
    $printdate= mysqli_real_escape_string($con, trim($request->printdate));
    $Years= mysqli_real_escape_string($con, trim($request->Years));
    $uname= mysqli_real_escape_string($con, trim($request->uname));
    $balamt= mysqli_real_escape_string($con, trim($request->balamt));
    $ipdno= mysqli_real_escape_string($con, trim($request->ipdno));
    $mark= mysqli_real_escape_string($con, trim($request->mark));
    $dismode= mysqli_real_escape_string($con, trim($request->dismode));
    $dismodeby= mysqli_real_escape_string($con, trim($request->dismodeby));
    $del= mysqli_real_escape_string($con, trim($request->del));
    $PntName= mysqli_real_escape_string($con, trim($request->PntName));
    $Pntgname= mysqli_real_escape_string($con, trim($request->Pntgname));
    $pntadd= mysqli_real_escape_string($con, trim($request->pntadd));
    $pntcity= mysqli_real_escape_string($con, trim($request->pntcity));
    $pntmobile= mysqli_real_escape_string($con, trim($request->pntmobile));
    $pntage= mysqli_real_escape_string($con, trim($request->pntage));
    $pntsex= mysqli_real_escape_string($con, trim($request->pntsex));
    $pntyears= mysqli_real_escape_string($con, trim($request->pntyears));
    $condoctor= mysqli_real_escape_string($con, trim($request->condoctor));
    $refby= mysqli_real_escape_string($con, trim($request->refby));
    $billamt= mysqli_real_escape_string($con, trim($request->billamt));
    $labto= mysqli_real_escape_string($con, trim($request->labto));
    $markdt= mysqli_real_escape_string($con, trim($request->markdt));
    $pntn= mysqli_real_escape_string($con, trim($request->pntn));
    $pntg= mysqli_real_escape_string($con, trim($request->pntg));
    $discountby= mysqli_real_escape_string($con, trim($request->discountby));
    $doctype= mysqli_real_escape_string($con, trim($request->doctype));
    $typeno= mysqli_real_escape_string($con, trim($request->typeno));
    $recamt= mysqli_real_escape_string($con, trim($request->recamt));
    $stat= mysqli_real_escape_string($con, trim($request->stat));
    $email= mysqli_real_escape_string($con, trim($request->email));
    $disper= mysqli_real_escape_string($con, trim($request->disper));
    $paymode= mysqli_real_escape_string($con, trim($request->paymode));
    $narration= mysqli_real_escape_string($con, trim($request->narration));
    $labtype= mysqli_real_escape_string($con, trim($request->labtype));
    $pntyrs= mysqli_real_escape_string($con, trim($request->pntyrs));
    $disresion= mysqli_real_escape_string($con, trim($request->disresion));
    $disname= mysqli_real_escape_string($con, trim($request->disname));
    $refund= mysqli_real_escape_string($con, trim($request->refund));
    $printtime= mysqli_real_escape_string($con, trim($request->printtime));
    $cantime= mysqli_real_escape_string($con, trim($request->cantime));
    $sampletype= mysqli_real_escape_string($con, trim($request->sampletype));
    $disp= mysqli_real_escape_string($con, trim($request->disp));
    $duerec= mysqli_real_escape_string($con, trim($request->duerec));

    $sql1 = "DELETE FROM pntpaymentheads WHERE vchrNo = '{$vchrNo}' and vchrDate= '{$vchrDate}'";
    error_log(print_r($sql1, TRUE));
    if(mysqli_query($con,$sql1)) {} 

$sql = "INSERT INTO pntpaymentheads (vchrNo,vchrDate,vchrTime,Sno,discountAmt,grandTotal,dcmntNo,dcmntType
,uhID,Reporttype,prnyes,printdate,Years,uname,balamt,ipdno
,mark,dismode,dismodeby,del,PntName,Pntgname,pntadd,pntcity
,pntmobile,pntage,pntsex,pntyears,condoctor,refby,billamt,labto
,markdt,pntn,pntg,discountby,doctype,typeno,recamt,stat,email
,disper,paymode,narration,labtype,pntyrs,disresion,disname,refund,
printtime,cantime,sampletype,disp,duerec)
VALUES
('{$vchrNo}','{$vchrDate}','{$vchrTime}','{$Sno}','{$discountAmt}','{$grandTotal}','{$dcmntNo}','{$dcmntType}',
'{$uhID}','{$Reporttype}','{$prnyes}','{$printdate}','{$Years}','{$uname}','{$balamt}','{$ipdno}',
'{$mark}','{$dismode}','{$dismodeby}','{$del}','{$PntName}','{$Pntgname}','{$pntadd}','{$pntcity}',
'{$pntmobile}','{$pntage}','{$pntsex}','{$pntyears}','{$condoctor}','{$refby}','{$billamt}','{$labto}',
'{$markdt}','{$pntn}','{$pntg}','{$discountby}','{$doctype}','{$typeno}','{$recamt}','{$stat}','{$email}',
'{$disper}','{$paymode}','{$narration}','{$labtype}','{$pntyrs}','{$disresion}','{$disname}','{$refund}',
'{$printtime}','{$cantime}','{$sampletype}','{$disp}','{$duerec}'

)";

//error_log(print_r($sql, TRUE));
if(mysqli_query($con,$sql))
{
    http_response_code(201);
}
else{
    http_response_code(422);
    }

}


    ?>