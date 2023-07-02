<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$id =$_GET['id'];
$sql = "SELECT * FROM logindetails WHERE UID = '{$id}' LIMIT 1";
//error_log(print_r($sql, TRUE));

if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $logindetails[$cr]['UID'] = $row['UID'];
    $logindetails[$cr]['stuserid'] = $row['stuserid'];
    $logindetails[$cr]['stpassword'] = $row['stpassword'];
    $logindetails[$cr]['stusername'] = $row['stusername'];
    $logindetails[$cr]['department'] = $row['department'];

    $cr++;
    }

  // print_r($tbl_consultant);

    echo json_encode($logindetails);
}
else{
    http_response_code(404);
    }
    ?>