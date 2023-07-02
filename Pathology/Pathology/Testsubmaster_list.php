<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$id =$_GET['id'];
$sql = "SELECT * FROM lab_subtest_master WHERE Testid = '{$id}'";
error_log(print_r($sql, TRUE));
if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $lab_subtest_master[$cr]['Testid'] = $row['Testid'];
    $lab_subtest_master[$cr]['TestsubName'] = $row['TestsubName'];
    $lab_subtest_master[$cr]['Testcode'] = $row['Testcode'];
    $lab_subtest_master[$cr]['SubUnit'] = $row['SubUnit'];
    $lab_subtest_master[$cr]['subPrice'] = $row['subPrice'];
    $lab_subtest_master[$cr]['male'] = $row['male'];
    $lab_subtest_master[$cr]['female'] = $row['female'];
    $lab_subtest_master[$cr]['normalvalue'] = $row['normalvalue'];
    $lab_subtest_master[$cr]['Remark'] = $row['Remark'];
    $lab_subtest_master[$cr]['testorder'] = $row['testorder'];
    $lab_subtest_master[$cr]['testmasterid'] = $row['testmasterid'];
    $lab_subtest_master[$cr]['formula'] = $row['formula'];
    $lab_subtest_master[$cr]['interpet'] = $row['interpet'];
    $lab_subtest_master[$cr]['comments'] = $row['comments'];
    $lab_subtest_master[$cr]['Ipet'] = $row['Ipet'];
    $lab_subtest_master[$cr]['comt'] = $row['comt'];
    $lab_subtest_master[$cr]['Wordcode'] = $row['Wordcode'];
    $lab_subtest_master[$cr]['subgroup'] = $row['subgroup'];

    $cr++;
    }

    //print_r($tbl_user1);

    echo json_encode($lab_subtest_master);
}
else{
    http_response_code(404);
    }

    ?>