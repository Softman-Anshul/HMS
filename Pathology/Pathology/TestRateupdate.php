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

    foreach ($request as $test) {
    
        error_log(print_r($test, TRUE));
        //senitize
        $testCode = mysqli_real_escape_string($con, trim($test->Testcode));
        $TestName = mysqli_real_escape_string($con, trim($test->TestName));
        $Price = mysqli_real_escape_string($con, trim($test->Price));

        $sql = "UPDATE lab_test_master set Price = '{$Price}'  WHERE Testcode = '{$testCode}'  ";

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