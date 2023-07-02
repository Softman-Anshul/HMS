<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'connect.php';
$uname =$_GET['uname'];
$sql = "SELECT * FROM user_permission WHERE unam= '{$uname}' ";
//error_reporting($sql);
if($result = mysqli_query($con,$sql))
{
   while ($row = mysqli_fetch_assoc($result))
   {
    $userpermission[$row['mainmenu']][$row['submenu']]['inst'] = $row['inst'];
    $userpermission[$row['mainmenu']][$row['submenu']]['edt'] = $row['edt'];
    $userpermission[$row['mainmenu']][$row['submenu']]['del'] = $row['del'];
}

     echo json_encode($userpermission);
}
else{
    http_response_code(404);
    }

    ?>