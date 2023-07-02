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
  foreach($request->permission as $permission){
    $uname = mysqli_real_escape_string($con, trim($request->uname));
    $mainmenu = mysqli_real_escape_string($con, trim($permission->mainmenu));
    $submenu = mysqli_real_escape_string($con, trim($permission->submenu));
    $inst = mysqli_real_escape_string($con, trim($permission->inst));
    if($inst == 1){
      $inst = 'Y';
    }
    $del = mysqli_real_escape_string($con, trim($permission->del));
    if($del == 1){
      $del = 'Y';
    }
    $edt = mysqli_real_escape_string($con, trim($permission->edt));
    if($edt == 1){
      $edt = 'Y';
    }
    
    $sql = "UPDATE user_permission SET inst='$inst',edt='$edt',del='$del' where unam='$uname' and mainmenu='$mainmenu' and submenu='$submenu'";
    error_log(print_r($sql, TRUE));

    if(mysqli_query($con,$sql))
    {
      http_response_code(201);
    }
    else{
      http_response_code(422);
    }

  }
}
    ?>