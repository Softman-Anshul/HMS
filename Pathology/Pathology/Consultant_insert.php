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
      $dctID= mysqli_real_escape_string($con, trim($request->dctID));
      $dctName= mysqli_real_escape_string($con, trim($request->dctName));
      $dctDOB= mysqli_real_escape_string($con, trim($request->dctDOB));
      $dctMobile= mysqli_real_escape_string($con, trim($request->dctMobile));
      $dctEmail= mysqli_real_escape_string($con, trim($request->dctEmail));
      $dctCity= mysqli_real_escape_string($con, trim($request->dctCity));
      $dctSplzn= mysqli_real_escape_string($con, trim($request->dctSplzn));
      $dctAdrs1= mysqli_real_escape_string($con, trim($request->dctAdrs1));
      $dctAdrs2= mysqli_real_escape_string($con, trim($request->dctAdrs1));
      $dctSex= mysqli_real_escape_string($con, trim($request->dctSex));
      $dctType= mysqli_real_escape_string($con, trim($request->dctType));
      $digree= mysqli_real_escape_string($con, trim($request->digree));
      $roomno= mysqli_real_escape_string($con, trim($request->roomno));
      $morning= mysqli_real_escape_string($con, trim($request->morning));
      $evening= mysqli_real_escape_string($con, trim($request->evening));
      $Night= mysqli_real_escape_string($con, trim($request->Night));
      $oncall= mysqli_real_escape_string($con, trim($request->oncall));
      $digree1= mysqli_real_escape_string($con, trim($request->digree1));
      $department= mysqli_real_escape_string($con, trim($request->department));
      $presmessage= mysqli_real_escape_string($con, trim($request->presmessage));
      $epres= mysqli_real_escape_string($con, trim($request->epres));
      $digree2= mysqli_real_escape_string($con, trim($request->digree2));
      $digree3= mysqli_real_escape_string($con, trim($request->digree3));
      $mobileprint= mysqli_real_escape_string($con, trim($request->mobileprint));
      $opdcharges= mysqli_real_escape_string($con, trim($request->opdcharges));
      $Emergency= mysqli_real_escape_string($con, trim($request->Emergency));
      $validday= mysqli_real_escape_string($con, trim($request->validday));

$sql = "INSERT INTO dctrInfo (dctName,dctDOB,dctMobile,dctEmail,dctCity,dctSplzn
,dctAdrs1,dctAdrs2,dctSex,dctType,digree,roomno,
morning,evening,Night,oncall,digree1,department,
presmessage,epres,digree2,digree3,mobileprint,opdcharges,Emergency,validday)
VALUES
('{$dctName}','{$dctDOB}','{$dctMobile}','{$dctEmail}','{$dctCity}','{$dctSplzn}',
'{$dctAdrs1}','{$dctAdrs2}','{$dctSex}','{$dctType}','{$digree}','{$roomno}',
'{$morning}','{$evening}','{$Night}','{$oncall}','{$digree1}','{$department}',
'{$presmessage}','{$epres}','{$digree2}','{$digree3}','{$mobileprint}'
,'{$opdcharges}','{$Emergency}','{$validday}'
)";
error_log(print_r($sql, TRUE));
if(mysqli_query($con,$sql))
{
    http_response_code(201);
}
else{
    http_response_code(422);
    }

}


    ?>