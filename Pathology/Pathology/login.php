<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$uid =$_GET['uid'];
$pass =$_GET['pass'];

$sql = "SELECT * FROM logindetails where stuserid= '{$uid}' and stpassword = '{$pass}' ";
//error_log(print_r($sql, TRUE));
if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $logindetails[$cr]['stuserid'] = $row['stuserid'];
    $logindetails[$cr]['stpassword'] = $row['stpassword'];
    $cr++;
    }
    echo json_encode($logindetails);
   // error_log(print_r($logindetails, TRUE));
    }
else{
    http_response_code(404);
    }

    ?>