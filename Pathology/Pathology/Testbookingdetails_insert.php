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
$vchrNo= mysqli_real_escape_string($con, trim($request->vchrNo));
$chrgsDate= mysqli_real_escape_string($con, trim($request->vchrDate));
    
$sql1 = "DELETE FROM pntpaymentdetails WHERE vchrNo = '{$vchrNo}' and chrgsDate= '{$chrgsDate}'";
if(mysqli_query($con,$sql1)) {} 

//senitize
$cr =0;
foreach ($request->tests as $array) {

    $itmName= mysqli_real_escape_string($con, trim($array->itmName));
    $itmChrgs= mysqli_real_escape_string($con, trim($array->itmChrgs));
    $itmQty= mysqli_real_escape_string($con, trim($array->itmQty));
    $itmDiscntPrsnt= mysqli_real_escape_string($con, trim($array->itmDiscntPrsnt));
    $totalAmt= mysqli_real_escape_string($con, trim($array->totalAmt));
    $vchrNo= mysqli_real_escape_string($con, trim($request->vchrNo));
    $discntAmt= mysqli_real_escape_string($con, trim($array->discntAmt));
    $chrgsDate= mysqli_real_escape_string($con, trim($request->vchrDate));
    $chtype= mysqli_real_escape_string($con, trim($array->chtype));
    $Years= mysqli_real_escape_string($con, trim($array->Years));
    $uname= mysqli_real_escape_string($con, trim($array->uname));
    $sno= mysqli_real_escape_string($con, trim($array->sno));
    $labto= mysqli_real_escape_string($con, trim($array->labto));
    
    $sql = "INSERT INTO pntpaymentdetails (itmName,itmChrgs,itmQty,itmDiscntPrsnt,totalAmt,vchrNo,discntAmt,chrgsDate
    ,chtype,Years,uname,sno,labto)
    VALUES
    ('{$itmName}','{$itmChrgs}','{$itmQty}','{$itmDiscntPrsnt}','{$totalAmt}','{$vchrNo}','{$discntAmt}','{$chrgsDate}',
    '{$chtype}','{$Years}','{$uname}','{$cr}','{$labto}' )";
     //error_log(print_r($sql, TRUE));
     
    if(!mysqli_query($con,$sql))
    {    

    }
    $cr++;
}
http_response_code(201);

}


    ?>