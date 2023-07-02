<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$uname =$_GET['uname'];
$user_permission = [];
$sql = "SELECT * FROM user_permission where unam = '{$uname}' ORDER BY sno,submenu";
//error_reporting($sql);
if($result = mysqli_query($con,$sql))
{
   $cr = 0;
   while ($row = mysqli_fetch_assoc($result))
   {
    $user_permission[$cr]['mainmenu'] = $row['mainmenu'];
    $user_permission[$cr]['submenu'] = $row['submenu'];

  
    $user_permission[$cr]['inst'] = $row['inst'] == 'Y' ? true : false;
    $user_permission[$cr]['inst'] = $row['inst'] == 'X' ? 'X' : $user_permission[$cr]['inst'];
    $user_permission[$cr]['edt'] = $row['edt'] == 'Y' ? true : false;
    $user_permission[$cr]['edt'] = $row['edt'] == 'X' ? 'X' : $user_permission[$cr]['edt'];
    $user_permission[$cr]['del'] = $row['del'] == 'Y' ? true : false;
    $user_permission[$cr]['del'] = $row['del'] == 'X' ? 'X' : $user_permission[$cr]['del'];
    
    $cr++;
    }

  // print_r($tbl_consultant);

    echo json_encode($user_permission);
}
else{
    http_response_code(404);
    }

    ?>