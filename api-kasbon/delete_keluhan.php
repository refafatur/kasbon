<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json; charset=utf-8");

    include "kasbon.php";
    $data = array();

    $query = mysqli_query($kon, "DELETE FROM tbl_keluhan WHERE keluhan='$_POST[keluhan]'");


    if($query) {
        $result = json_encode(array('succes' =>true, 'result' =>$data));
    }else{
        $result = json_encode(array('succes' =>false));
    }
    echo $result;

?>