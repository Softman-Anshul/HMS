<?php

$dbserver = "localhost";
$dbuser = "root";
$dbpassword = "";
$database = "pathology";

$con = mysqli_connect($dbserver,$dbuser,$dbpassword,$database) ;

if(!$con){
    die("Connection failed: " . mysqli_connect_error());
}

?>     