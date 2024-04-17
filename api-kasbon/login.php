<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json; charset=utf-8");


include "kasbon.php";

$query = mysqli_query($kon, "SELECT nis='$_POST[nis]',password='$_POST[password]' FROM tbl_user");

if($query){
    $result = json_encode(array('error' => false,'msg' => 'Data Berhasil disimpan'));
} else {
    $result = json_encode(array('error' => true,'msg' => 'Data Gagal disimpan'));
}

echo $result;



?>