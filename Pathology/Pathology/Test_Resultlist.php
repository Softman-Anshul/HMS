<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$lab_test_report = [];

$vchrNo = $_GET['vchrno'];
$vchrDate = $_GET['chrgsDate'];
//error_log(print_r($vchrNo, TRUE));
$sql = "TRUNCATE TABLE lab_test_report";
if(mysqli_query($con,$sql))
{

$sql1 = "SELECT a.testid,a.testgroup,a.testcode,a.testname,b.sno,'','','','','','','','',subgroup,
remarks FROM lab_test_master a JOIN pntpaymentdetails b ON a.testname = b.itmname
WHERE b.vchrNo = '$vchrNo' and chrgsdate = '$vchrDate' order by b.sno ";

if($result = mysqli_query($con,$sql1))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
      if($row['remarks'] == "N")
      {
        if($row['subgroup'] == "No")
        {
             $sql2 = "INSERT INTO lab_test_report
             SELECT testid,'{$row['testgroup']}','{$row['testgroup']}',testcode,testsubname,'MH',
             '$cr',subunit,normalvalue,male,female,interpet,comments,Ipet,comt,remark,
             '{$row['subgroup']}',0,0,'',wordcode,formula,0,Total FROM lab_subtest_master
             WHERE  testid=  '{$row['testid']}' ";
             if(mysqli_query($con,$sql2))
             {
                $sql3 = "SELECT subunit,normalvalue,male,female,interpet,comments,Ipet,comt,remark 
                FROM lab_subtest_master WHERE testid= '{$row['testid']}' ";
                if($result3 = mysqli_query($con,$sql3))
                {}
             }
        }
        else
        {
            $sql5 = "INSERT INTO lab_test_report 
            SELECT  a.testid,a.testgroup,a.testgroup,a.testcode,a.testname,'MH',
            b.sno,'','','','','','','','',a.remarks,subgroup,0,0,'','','',0,Total 
            FROM lab_test_master a JOIN pntpaymentdetails b ON a.testname = b.itmname
            WHERE a.testid= '{$row['testid']}' LIMIT 1";
            if(mysqli_query($con,$sql5))
            {
                $sql6 = "INSERT INTO lab_test_report 
                SELECT testid,'{$row['testgroup']}','{$row['testgroup']}',testcode,
                testsubname,'SH',testorder,subunit,normalvalue,male,female,interpet,comments,
                Ipet,comt,remark,'No',0,0,'',wordcode,formula,0,Total FROM lab_subtest_master
                WHERE testid= '{$row['testid']}' ORDER BY testorder ";
                if(mysqli_query($con,$sql6)){}                
            }
        }
      } //end of remark n
      if($row['remarks'] == "P")
      {
        $sql7 = "INSERT INTO lab_test_report 
        SELECT  a.testid,a.testgroup,a.testgroup,a.testcode,a.testname,'MH',
        b.sno,'','','','','','','','',a.remarks,subgroup,0,{$cr} ,'','','',0,Total 
        FROM lab_test_master a JOIN pntpaymentdetails b on a.testname = b.itmname
        WHERE a.testid= '{$row['testid']}'  LIMIT 1";
        if(mysqli_query($con,$sql7))
        {
            $sql8 = "SELECT testid,testmasterid,testorder,subgroup FROM lab_subtest_Master
            WHERE testid=  '{$row['testid']}' ORDER by testorder";
            if($result8 = mysqli_query($con,$sql8))
            {
                $crm = 0;
                while ($rowm = mysqli_fetch_assoc($result8))
                {
                    if ($rowm['subgroup'] == "Yes" || $rowm['subgroup'] == "YES")
                    {
                    $sql9 = "INSERT INTO lab_test_report
                    SELECT  testid,'{$row['testgroup']}','{$row['testgroup']}',testcode,testsubname,
                    'SH',testorder,'','','','',interpet,comments,Ipet,comt,remark,subgroup,
                    testmasterid,{$cr},'',wordcode,formula,0,Total FROM lab_subtest_master
                    WHERE testid= '{$row['testid']}' AND testorder='{$crm}' LIMIT 1";
                    if(mysqli_query($con,$sql9))
                    {
                        $sql10 = "INSERT INTO lab_test_report 
                        SELECT testid,'{$row['testgroup']}','{$row['testgroup']}',testcode,testsubname,
                        'EH',{$crm},subunit,normalvalue,male,female,interpet,comments,Ipet,comt,remark,
                        subgroup,testmasterid,0,'',wordcode,formula,0,Total FROM lab_subtest_master
                        WHERE testid='{$rowm['testmasterid']}' order by testorder";
                        if(mysqli_query($con,$sql10)){} 
                     }
                    }
                    else
                    {
                        $sql11 = "INSERT INTO lab_test_report
                        SELECT testid,'{$row['testgroup']}','{$row['testgroup']}',testcode,testsubname,
                        'SH',testorder,subunit,normalvalue,male,female,interpet,comments,Ipet,comt,
                        remark,subgroup,testmasterid,{$cr},'',wordcode,formula,0,Total from lab_subtest_master
                        WHERE testid= '{$row['testid']}' and testorder= '{$crm}' LIMIT 1";
                       if(mysqli_query($con,$sql11)){} 
                    }



                $crm++;
                }

            }
        }

      } // end of remark  P
      
    $cr++;
    }

    //print_r($tbl_user1);
}
}

$sqlr = "SELECT * FROM lab_test_report";
if($result11 = mysqli_query($con,$sqlr))
{
   $crf = 0;
   while ($row = mysqli_fetch_assoc($result11))
   {
    $lab_test_report[$crf]['testid'] = $row['testid'];
    $lab_test_report[$crf]['testgroup'] = $row['testgroup'];
    $lab_test_report[$crf]['testsubgroup'] = $row['testsubgroup'];
    $lab_test_report[$crf]['testcode'] = $row['testcode'];
    $lab_test_report[$crf]['testname'] = $row['testname'];
    $lab_test_report[$crf]['Heading'] = $row['Heading'];
    $lab_test_report[$crf]['sno'] = $row['sno'];
    $lab_test_report[$crf]['subunit'] = $row['subunit'];
    $lab_test_report[$crf]['normalvalue'] = $row['normalvalue'];
    $lab_test_report[$crf]['male'] = $row['male'];
    $lab_test_report[$crf]['female'] = $row['female'];
    $lab_test_report[$crf]['interpet'] = $row['interpet'];
    $lab_test_report[$crf]['comments'] = $row['comments'];
    $lab_test_report[$crf]['Ipet'] = $row['Ipet'];
    $lab_test_report[$crf]['comt'] = $row['comt'];
    $lab_test_report[$crf]['remark'] = $row['remark'];
    $lab_test_report[$crf]['subgroup'] = $row['subgroup'];
    $lab_test_report[$crf]['testmasterid'] = $row['testmasterid'];
    $lab_test_report[$crf]['rowno'] = $row['rowno'];
    $lab_test_report[$crf]['value'] = $row['value'];
    $lab_test_report[$crf]['Wordcode'] = $row['Wordcode'];
    $lab_test_report[$crf]['formula'] = $row['formula'];
    $lab_test_report[$crf]['labid'] = $row['labid'];
    $lab_test_report[$crf]['total'] = $row['Total'];
   
    $crf++;
    }

    //print_r($tbl_user1);
    echo json_encode($lab_test_report);
    }
else{
    http_response_code(404);
    }

    ?>