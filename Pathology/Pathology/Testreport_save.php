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
$vchrNo = mysqli_real_escape_string($con, trim($request->vchrNo));
$vchrDate = mysqli_real_escape_string($con, trim($request->vchrDate));
$sqlupdt = "UPDATE pntpaymentheads SET prnyes='Y' WHERE vchrNo= '{$vchrNo}' and vchrDate='{$vchrDate}'";
if(mysqli_query($con,$sqlupdt))
{ 
$sql = "DELETE FROM lab_test_subvalue WHERE docno= '{$vchrNo}' and docdate='{$vchrDate}'";
if(mysqli_query($con,$sql))
{ 
    $cr=0;
foreach ($request->report as $array) {
    $range1 = mysqli_real_escape_string($con, trim($array->male));
    if($request->pntsex == "Male")
    {
        if($array->male == "")
        {
            $range1 = $array->normalvalue;
        }
    } else {
        $range1 = mysqli_real_escape_string($con, trim($array->female));
        if($array->female == "")
        {
            $range1 = $array->normalvalue;
        }
    }
    $vchrNo = mysqli_real_escape_string($con, trim($request->vchrNo));
    $vchrDate = mysqli_real_escape_string($con, trim($request->vchrDate));
    $grp = mysqli_real_escape_string($con, trim($array->testgroup));
    $SubGroup = mysqli_real_escape_string($con, trim($array->testgroup));
    $testname = mysqli_real_escape_string($con, trim($array->testname));
    $Range2 = mysqli_real_escape_string($con, trim($rarray->Range2));
    $Unit = mysqli_real_escape_string($con, trim($array->subunit));
	$value = mysqli_real_escape_string($con, trim($array->value));
    $Sno = mysqli_real_escape_string($con, trim($array->sno));
    $HeadingRemark = mysqli_real_escape_string($con, trim($array->Heading));
    $remark = mysqli_real_escape_string($con, trim($array->remark));
    $page = mysqli_real_escape_string($con, trim($array->page));
    $interpet = mysqli_real_escape_string($con, trim($array->interpet));
    $comments = mysqli_real_escape_string($con, trim($array->comments));
    $testid = mysqli_real_escape_string($con, trim($array->testid));
    $skiptest = mysqli_real_escape_string($con, trim($array->skiptest));
    $labid = mysqli_real_escape_string($con, trim($array->labid));

    $sql1 = "INSERT INTO lab_test_subvalue (docno,docdate,Grp,SubGroup,testname,Range1,Range2
    ,Unit,value,Sno,HeadingRemark,remark,page,interpet,comments,testid,skiptest,labid)
    VALUES
    ('{$vchrNo}','{$vchrDate}','{$grp}','{$SubGroup}','{$testname}','{$range1}','{$range2}',
    '{$Unit}','{$value}','{$cr}','{$HeadingRemark}','{$remark}','{$page}','{$interpet}','{$comments}',
    '{$testid}','{$skiptest}','{$labid}')";
    //error_log(print_r($sql, TRUE));
    $cr++;
    if(!mysqli_query($con,$sql1))
    {   
       
        http_response_code(422);
    }
    }
    
}
}
http_response_code(201);
}


?>