<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
//$id =$_GET['id'];
$user_permission = [];
$sql = "SELECT * FROM user_permission ORDER BY sno";
//error_reporting($sql);
if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $user_permission[$cr]['mainmenu'] = $row['mainmenu'];
    $user_permission[$cr]['submenu'] = $row['submenu'];
    $user_permission[$cr]['inst'] = $row['inst'];
    $user_permission[$cr]['edt'] = $row['edt'];
    $user_permission[$cr]['del'] = $row['del'];

    $cr++;
    }

  // print_r($tbl_consultant);

    echo json_encode($user_permission);
}
else{
    http_response_code(404);
    }

    ?>