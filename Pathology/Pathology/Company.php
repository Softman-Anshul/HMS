<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//error_reporting(E_ERROR);
$master_mcompany = [];
$sql = "SELECT * FROM master_mcompany";

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $master_mcompany[$cr]['Comp_nam'] = $row['Comp_nam'];
    $master_mcompany[$cr]['Comp_add'] = $row['Comp_add'];
    $master_mcompany[$cr]['Comp_add1'] = $row['Comp_add1'];
    $master_mcompany[$cr]['Comp_city'] = $row['Comp_city'];
    $master_mcompany[$cr]['Comp_Phon'] = $row['Comp_Phon'];
    $master_mcompany[$cr]['Comp_Short_nam'] = $row['Comp_Short_nam'];
    $master_mcompany[$cr]['Comp_key'] = $row['Comp_key'];
    $master_mcompany[$cr]['email'] = $row['email'];
    $master_mcompany[$cr]['years'] = $row['years'];
    $master_mcompany[$cr]['profle'] = $row['profle'];

    $cr++;
    }

    //print_r($tbl_user1);

    echo json_encode($master_mcompany);
}
else{
    http_response_code(404);
    }

    ?>